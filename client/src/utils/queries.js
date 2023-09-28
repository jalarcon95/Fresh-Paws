import { gql } from "@apollo/client";

export const GET_ME = gql`
query me {
    me {
      username
      email
      pets{
        name
        species
        vaccine
        description
        appointment{
          date
          time
        }
      }
    }
  }
`;


