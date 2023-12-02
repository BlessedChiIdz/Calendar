import { ApiProperty } from "@nestjs/swagger";
import {Column, DataType, Model, Table} from "sequelize-typescript";

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
    @Column({type:DataType.INTEGER})
    user1Id:number;

    @ApiProperty({example:'13',description:'SecondUser'})
    @Column({type:DataType.INTEGER})
    user2Id:number;
}
