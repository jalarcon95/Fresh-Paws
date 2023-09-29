const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    pets: [Pet]
}

type Pet {
    _id: ID!
    name: String
    species: String
    vaccine: Boolean
    description: String
    appointments: [Appointment]
}

type Appointment {
    _id: ID!
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
    name: String!
    species: String!
    vaccine: Boolean
    description: String
}

input InputAppointment {
    petId: ID!
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