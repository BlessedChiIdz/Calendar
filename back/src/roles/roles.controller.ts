import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {CreateRolesDto} from "./dto/create-roles.dto";

@Controller('roles')
export class RolesController {

    constructor(private roleService:RolesService) {
    }

    @Post()
    create(@Body() dto:CreateRolesDto){
        return this.roleService.createRole(dto)
    }

    @Get('/:value')
    getByValue(@Param('value') value:string){
        return this.roleService.getRoleByValue(value);
    }
}
