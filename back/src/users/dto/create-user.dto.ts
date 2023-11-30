import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
    @ApiProperty({example:'usr@gmail.com',description:'Email'})
    @IsString({message:'Should be string'})
    @IsEmail({},{message:"not EMAIL"})
    readonly email:string;
    @ApiProperty({example:'qwerty',description:'Password'})
    @IsString({message:'Should be string'})
    @Length(4,16,{message:'password in range 4-16 length'})
    readonly password:string;
}