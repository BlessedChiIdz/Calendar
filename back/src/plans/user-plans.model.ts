import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Plan} from "./plans.model";
import {Friends} from "../friends/friends.model";


@Table({tableName:'userPlans',createdAt:false,updatedAt:false})
export class UserPlans extends Model<UserPlans>{


    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ForeignKey(()=>Plan)
    @Column({type:DataType.INTEGER})
    planId:number;

    @ForeignKey(()=>Friends)
    @Column({type:DataType.INTEGER})
    userId:number;

}