import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "../roles/user-roles.model";
import { ApiProperty } from "@nestjs/swagger";

interface PlansAttrs{
    date:string;
    description:string;
}


@Table({tableName:'roles'})

export class Plans extends Model<Plans,PlansAttrs>{
    @ApiProperty({example:'1',description:'UniqueKey'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'13.01.2022',description:'Date'})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    date:string;


    @ApiProperty({example:'goToCinema',description:'whatManWantToDo'})
    @Column({type:DataType.STRING,unique:false})
    description:string;

    @ForeignKey(()=>User)
    @Column({type:DataType.INTEGER})
    userId:number;
    @BelongsTo(()=>User)
    author: User;


}