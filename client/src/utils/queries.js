import { gql } from '@apollo/client';

export const GET_ME = gql`
query me {
    me {
      email
      username
      win
      loss
    }
  }
`
export const GET_USERS = gql`
query users {
    users {
      email
      username
      win
      loss
    }
  }
`