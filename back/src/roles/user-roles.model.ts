import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Role} from "./roles.model";


interface RoleAttrs{
    value:string;
    description:string;
}


@Table({tableName:'userRoles',createdAt:false,updatedAt:false})
export class UserRoles extends Model<UserRoles>{

    @Column({type:DataType.INTEGER,primaryKey:true,autoIncrement:true,unique:true})
    id:number;


    @ForeignKey(()=>Role)
    @Column({type:DataType.INTEGER})
    roleId:number;

    @ForeignKey(()=>User)
    @Column({type:DataType.INTEGER})
    UserId:number;


}