import {Injectable} from '@nestjs/common';
import {PlansDto} from "./dto/plans.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Plans} from "./plans.model";

@Injectable()
export class PlansService {

    constructor(@InjectModel(Plans) private plansRep:typeof  Plans) {
    }

    async creatPlan(dto:PlansDto){
        const plan = await this.plansRep.create(dto)
        return plan;
    }
}
