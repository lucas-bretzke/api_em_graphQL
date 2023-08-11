import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Appoiment {
  @Field()
  startAt: Date

  @Field()
  endsAt: Date
}
