import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {UserRoles} from "../roles/user-roles.model";
import { ApiProperty } from "@nestjs/swagger";
import {Friends} from "../friends/friends.model";
import {UserPlans} from "./user-plans.model";

interface PlansAttrs{
    date:string;
    description:string;
}

@Table({tableName:'plans',createdAt:false,updatedAt:false})

export class Plan extends Model<Plan,PlansAttrs>{
    @ApiProperty({example:'1',description:'UniqueKey'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'13.01.2022',description:'Date'})
    @Column({type:DataType.STRING,allowNull:false})
    date:string;


    @ApiProperty({example:'goToCinema',description:'whatManWantToDo'})
    @Column({type:DataType.STRING,unique:false})
    description:string;

    @BelongsToMany(()=>Friends,()=>UserPlans)
    users:Friends[];
}