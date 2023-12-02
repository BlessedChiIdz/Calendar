import {Body, Controller, Post} from '@nestjs/common';
import {PlansService} from "./plans.service";
import {PlansDto} from "./dto/plans.dto";

@Controller('plans')
export class PlansController {

    constructor(private plansService: PlansService) {
    }

    @Post('/create')
    create(@Body() dto:PlansDto){
        return this.plansService.creatPlan(dto)
    }
}
