import { ApiProperty } from "@nestjs/swagger";
import {Column, DataType, Model, Table} from "sequelize-typescript";

interface FriendsAwait{
    user1Id:number;
    user2Id:number;
}
@Table({tableName:'FriendsAwait',createdAt:false,updatedAt:false})
export class FriendsW extends Model<FriendsW,FriendsAwait>{

    @ApiProperty({example:'1',description:'UniqueKey'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number;

    @ApiProperty({example:'13',description:'FirstUser'})
    @Column({type:DataType.INTEGER,allowNull:false})
    user1Id:number;

    @ApiProperty({example:'13',description:'SecondUser'})
    @Column({type:DataType.INTEGER,allowNull:false})
    user2Id:number;

}
