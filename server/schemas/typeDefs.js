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
    service: String!
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
    vaccine: String
    description: String
}

input InputAppointment {
    petId: ID!
    date: String!
    time: String!
    service: String!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPet(newPet: InputPet!): User
    removePet(petId: ID!): User
    addAppointment(newAppointment: InputAppointment!): User
    removeAppointment(appointmentId: ID!): User
}
`;

module.exports = typeDefs;