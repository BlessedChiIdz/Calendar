import {Body, Controller, Get, Post, UseGuards, UsePipes} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {CreateUserDto} from "./dto/create-user.dto";
import {UsersService} from "./users.service";
import {User} from "./users.model";
import {Roles} from "../auth/roles-auth.decorators";
import {RolesGuar} from "../auth/roles.guar";
import {AddRoleDto} from "./dto/add-role.dto";
import {ValidationPipe} from "../pipes/validation.pipe";


@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private usersService:UsersService) {

    }

    @ApiOperation({summary:'CreateUser'})
    @ApiResponse({status:200,type: User})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto:CreateUserDto){
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary:'GetAllUsers'})
    @ApiResponse({status:200,type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuar)
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }
    @ApiOperation({summary:'SetRoleToUser'})
    @ApiResponse({status:200})
    @Roles("ADMIN")
    @UseGuards(RolesGuar)
    @Post('/role')
    addRole(@Body() dto:AddRoleDto){
        return this.usersService.addRole(dto);
    }
}
