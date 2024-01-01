export const userTypeDefs = `
  type User {
    user_id: ID
    email: String
    password: String
    name: String
    token: String
  }

  type UserLogin {
    user_id: ID
    email: String
  }

  type Query {
    getUser: User
    logoutUser: LogoutStatus
  }

  type Mutation {
    registerUser(email: String, password: String, name: String): User
    loginUser(email: String, password: String, name: String, token:String): User
  }

  type LogoutStatus {
    status: String!
  }

  type Subscription{
    userCreated: User
}
schema {
    query:Query
    mutation:Mutation
    subscription:Subscription
} 
`;