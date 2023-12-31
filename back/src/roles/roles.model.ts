import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";


interface RoleAttrs{
    value:string;
    description:string;
}


@Table({tableName:'roles'})
export class Role extends Model<Role,RoleAttrs>{
    @ApiProperty({example:'1',description:'UniqueKey'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'User',description:'Role'})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    value:string;


    @ApiProperty({example:'DefaultUser',description:'DescriptionOfRule'})
    @Column({type:DataType.STRING,unique:false})
    description:string;

    @BelongsToMany(()=>User,()=>UserRoles)
    users:User[];

}