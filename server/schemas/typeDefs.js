const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    pets: [Pet]
}

tpye Pet {
    petId: ID!
    name: String!
    species: String!
    vaccine: Boolean
    description: String
    appointment: [Appointment]
}

type Appointment {
    appointmentId: ID!
    date: String!
    time: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

input InputPet {
    petId: String
    name: String!
    species: String!
    vaccine: Boolean
    description: String
    appointment: [Appointment]
}

input InputAppointment {
    appointmentId: String
    date: String!
    time: String!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPet(newPet: InputPet!): User
    removePet(petId: ID!): User
    addAppointment(newAppointment: InputAppointment!): Pet
    removeAppointment(appointmentId: ID!): Pet
}
`;

module.exports = typeDefs;