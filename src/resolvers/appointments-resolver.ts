import { Appoiment } from '../dtos/models/appoiment-model'
import { CreateAppoimentInput } from '../dtos/inputs/create-appoimente-input'
import { Mutation, Query, Resolver, Arg } from 'type-graphql'

@Resolver()
export class AppointmentsResolver {
  @Query(() => String)
  async helloWord() {
    return 'Hello Word'
  }

  @Mutation(() => Appoiment)
  async createAppoiment(@Arg('data') data: CreateAppoimentInput) {
    const appoiment = {
      startAt: data.startAt,
      endsAt: data.endsAt
    }
    return appoiment
  }
}
