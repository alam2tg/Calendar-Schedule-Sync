const typeDefs = `
  type User {
    _id: ID!
    username: String
    email: String
    win: Int
    loss: Int   
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addWin(win: Int!): User
    addLoss(loss: Int!): User
  }
  
  `;

module.exports = typeDefs;