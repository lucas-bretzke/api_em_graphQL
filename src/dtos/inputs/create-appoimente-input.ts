import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateAppoimentInput {
  @Field()
  customerId: string

  @Field()
  startAt: Date

  @Field()
  endsAt: Date
}
