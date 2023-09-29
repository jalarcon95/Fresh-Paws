const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                data = await User.findOne({ _id: context.user._id }).select('-__v -password');
                return data;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addPet: async (parent, { newPet }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { pets: newPet } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removePet: async (parents, { petId }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { pets: { petId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addAppointment: async (parents, { newAppointment }, context) => {
            if (context.user) {
                const updatedPet = await User.findOneAndUpdate({_id: context.user._id, "pets._id": newAppointment.petId}, {
                    $push: {"pets.$[].appointments": {date: newAppointment.date, time: newAppointment.time}}
                }, {
                    upsert: true,
                    new: true,
                    runValidators: true
                })
                return updatedPet;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeAppointment: async (parents, { appointmentId }, context) => {
            if (context.user) {
                const updatedPet = await Pet.findByIdAndUpdate(
                    { _id: context.pet._id },
                    { $pull: { appointment: { appointmentId } } },
                    { new: true }
                );
                return updatedPet;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;