import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";


interface UserAttrs{
    email:string;
    password:string;
}


@Table({tableName:'users'})
export class User extends Model<User,UserAttrs>{
    @ApiProperty({example:'1',description:'UniqueKey'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'usr@gmail.com',description:'Email'})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    email:string;


    @ApiProperty({example:'qwerty',description:'UserPassword'})
    @Column({type:DataType.STRING,unique:false})
    password:string;

    @ApiProperty({example:'true',description:'BannedOrNot'})
    @Column({type:DataType.BOOLEAN,defaultValue:false})
    banned:boolean;


    @ApiProperty({example:'OverloadDB',description:'WhyBan'})
    @Column({type:DataType.STRING,allowNull:true})
    banReason:string;

    @BelongsToMany(()=>Role,()=>UserRoles)
    roles:Role[];
}