import { ApolloServer, gql } from 'apollo-server'
import { randomUUID } from 'node:crypto'

const typeDefs = gql`
  type User {
    id: String
    name: String!
    phone: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, phone: String!): User!
  }
`

interface User {
  id: string
  name: string
  phone: string
}
const users: User[] = []

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users
      }
    },
    Mutation: {
      createUser: (parent: any, args: any, ctx: any) => {
        const user = { id: randomUUID(), name: args.name, phone: args.phone }
        users.push(user)
        return user
      }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`)
})
