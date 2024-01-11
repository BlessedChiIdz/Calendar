import { ApiProperty } from "@nestjs/swagger";
import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {Plan} from "../plans/plans.model";
import {UserPlans} from "../plans/user-plans.model";

interface FriendsAttr{
    user1Id:number;
    user2Id:number;
}
@Table({tableName:'Friends',createdAt:false,updatedAt:false})
export class Friends extends Model<Friends,FriendsAttr>{

    @ApiProperty({example:'1',description:'UniqueKey'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;
    @ApiProperty({example:'13',description:'FirstUser'})
    @Column({type:DataType.INTEGER,allowNull:false})
    user1Id:number;

    @ApiProperty({example:'13',description:'SecondUser'})
    @Column({type:DataType.INTEGER,allowNull:false})
    user2Id:number;

    @BelongsToMany(()=>Plan,()=>UserPlans)
    plans: Plan[];
}
