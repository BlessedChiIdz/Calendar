import {forwardRef, Module} from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { FriendsService } from './friends.service';
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {Friends} from "./friends.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Plan} from "../plans/plans.model";

@Module({
  controllers: [FriendsController],
  providers: [FriendsService],
  imports:[
    SequelizeModule.forFeature([Friends]),
  ],
  exports:[
    FriendsService
  ]
})
export class FriendsModule {}
