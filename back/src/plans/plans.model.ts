import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "../roles/user-roles.model";
import { ApiProperty } from "@nestjs/swagger";

interface PlansAttrs{
    date:string;
    description:string;
}


@Table({tableName:'plans',createdAt:false,updatedAt:false})

export class Plans extends Model<Plans,PlansAttrs>{
    @ApiProperty({example:'1',description:'UniqueKey'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'13.01.2022',description:'Date'})
    @Column({type:DataType.STRING,allowNull:false})
    date:string;


    @ApiProperty({example:'goToCinema',description:'whatManWantToDo'})
    @Column({type:DataType.STRING,unique:false})
    description:string;

    @ApiProperty({example:'guy1',description:'who create request'})
    @ForeignKey(()=>User)
    @Column({type:DataType.INTEGER})
    userIdPost:number;
    @ApiProperty({example:'guy2',description:'who get or reject request'})
    @ForeignKey(()=>User)
    @Column({type:DataType.INTEGER}) //not tested!!!!!!!!!!!!!!!!!!!!
    userIdGet:number;
    @BelongsTo(()=>User)
    author: User;


}