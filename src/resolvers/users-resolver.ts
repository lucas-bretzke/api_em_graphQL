import { User } from '../dtos/models/user-model'
import { randomUUID } from 'crypto'
import { CreateUserInput, EditUser } from '../dtos/inputs/user'
import { Mutation, Query, Resolver, Arg } from 'type-graphql'

const users: User[] = []

@Resolver()
export class UsersResolvers {
  @Query(() => [User])
  async getUsers() {
    return users
  }

  @Mutation(() => User)
  async createUser(@Arg('user') user: CreateUserInput) {
    const newUser: User = {
      id: randomUUID(),
      name: user.name,
      phone: user.phone
    }

    users.push(newUser)

    return newUser
  }

  @Mutation(() => User)
  async deleteUser(@Arg('id') id: String) {
    const index = users.findIndex(item => item.id === id)

    if (index === -1) throw new Error('Usuario no encontrado')

    return users.splice(index, 1)[0]
  }

  @Mutation(() => User)
  async editUser(@Arg('user') user: EditUser) {
    const index = users.findIndex(item => item.id === user.id)

    if (index === -1) throw new Error('Usuario no encontrado')

    const updatedUser = { ...users[index], ...user }
    users[index] = updatedUser

    return updatedUser
  }
}
