import { gql } from "@apollo/client";

export const GET_ME = gql`
query me {
    me {
      username
      email
      pets{
        _id
        name
        species
        vaccine
        description
        appointments{
          _id
          date
          time
          service
        }
      }
    }
  }
`;


