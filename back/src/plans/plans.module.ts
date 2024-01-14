import {forwardRef, Module} from '@nestjs/common';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Plan} from "./plans.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";
import {UserPlans} from "./user-plans.model";
import {FriendsModule} from "../friends/friends.module";
import {Friends} from "../friends/friends.model";
import {FriendsService} from "../friends/friends.service";

@Module({
  controllers: [PlansController],
  providers: [PlansService],
  imports:[
    SequelizeModule.forFeature([User,Plan,UserPlans]),
  ],
    exports:[
  PlansService
]
})
export class PlansModule {}
