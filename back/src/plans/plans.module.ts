import {forwardRef, Module} from '@nestjs/common';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Plans} from "./plans.model";
import {RolesModule} from "../roles/roles.module";
import {AuthModule} from "../auth/auth.module";

@Module({
  controllers: [PlansController],
  providers: [PlansService],
  imports:[
    SequelizeModule.forFeature([User,Plans]),
    RolesModule,
    forwardRef(()=>AuthModule)
  ],
})
export class PlansModule {}
