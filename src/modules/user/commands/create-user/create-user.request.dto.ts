import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserRequestDto {
  @ApiProperty({
    example: 'john@gmail.com',
    description: 'User email address',
  })
  @MaxLength(320)
  @MinLength(5)
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'USER', description: 'User role' })
  @IsString()
  readonly role: Role;

  @ApiProperty({ example: 'John Doe', description: 'User name' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'pass', description: 'User password' })
  @IsString()
  readonly password: string;
}
