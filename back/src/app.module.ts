import {Module} from "@nestjs/common";

import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PlansModule } from './plans/plans.module';
import {Plans} from "./plans/plans.model";

@Module({
    controllers: [],
    providers:[],
    imports:[
        ConfigModule.forRoot({
           envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRESS_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User,Role,UserRoles,Plans],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PlansModule,
    ]
})
export class  AppModule{}