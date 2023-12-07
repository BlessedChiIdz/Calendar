import {forwardRef, Module} from '@nestjs/common';
import { FriendAwaitService } from './friend-await.service';
import {FriendAwaitController} from "./friend-await.controller";
import {SequelizeModule} from "@nestjs/sequelize";
import {FriendsW} from "./friend-await.model";
import {FriendsService} from "../friends/friends.service";
import {UsersModule} from "../users/users.module";
import {FriendsModule} from "../friends/friends.module";

@Module({
  controllers: [FriendAwaitController],
  providers: [FriendAwaitService],
  imports:[
    forwardRef(()=>FriendsModule),
    SequelizeModule.forFeature([FriendsW]),
  ],
})
export class FriendAwaitModule {}
