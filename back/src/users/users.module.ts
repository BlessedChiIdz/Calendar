import {forwardRef, Module} from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {Plan} from "../plans/plans.model";
import {UserPlans} from "../plans/user-plans.model";
import {PlansModule} from "../plans/plans.module";
import {FriendsModule} from "../friends/friends.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
      SequelizeModule.forFeature([User,Role,UserRoles,Plan,UserPlans]),
      RolesModule,
      FriendsModule,
      PlansModule,
      forwardRef(()=>AuthModule)
  ],
    exports:[
        UsersService,
    ]
})
export class UsersModule {}
