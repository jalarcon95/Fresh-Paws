import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_PET = gql`
  mutation addPet($newPet: InputPet!) {
    addPet(newPet: $newPet) {
      _id
      username
      email
      pets {
        _id
        name
        species
        vaccine
        description
      }
    }
  }
`;

export const REMOVE_PET = gql`
  mutation removePet($petId: ID!) {
    removePet(petId: $petId) {
      _id
      username
      email
      pets {
        _id
        name
        species
        vaccine
        description
        appointments {
          date
          time
        }
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment($newAppointment: InputAppointment!) {
    addAppointment(newAppointment: $newAppointment) {
      _id
    }
  }
`;

export const REMOVE_APPOINTMENT = gql`
  mutation removeAppointment($appointmentId: ID!) {
    removeAppointment(appointmentId: $appointmentId) {
      _id
    }
  }
`;