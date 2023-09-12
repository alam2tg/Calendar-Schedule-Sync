import { gql } from '@apollo/client'

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        username
      }
    }
  }
`
export const LOGIN = gql`
mutation  login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
}
`
export const ADD_WIN = gql`
mutation addWin($win: Int!) {
  addWin(win: $win) {
    username
    win
  }
}
`

export const ADD_LOSS = gql`
mutation addLoss($loss: Int!) {
  addLoss(loss: $loss) {
    username
    loss
  }
}
`