import { IsString } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  name: string

  @Field()
  @IsString()
  phone: string
}

@InputType()
export class EditUser {
  @Field()
  @IsString()
  id: string

  @Field()
  @IsString()
  name: string

  @Field()
  @IsString()
  phone: string
}

@InputType()
export class DeleteUser {
  @Field()
  @IsString()
  id: string
}
