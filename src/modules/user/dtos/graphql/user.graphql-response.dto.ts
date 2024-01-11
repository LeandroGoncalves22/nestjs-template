import { ResponseBase } from '@libs/api/response.base';
import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@ObjectType()
export class UserGraphqlResponseDto extends ResponseBase {
  @Field({
    description: "User's identifier",
  })
  id: string;

  @Field({
    description: "User's email address",
  })
  email: string;

  @Field({
    description: "User's name",
  })
  name: string;
  
  @Field({
    description: "User's role",
  })
  role: Role;
}
