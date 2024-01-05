import {Injectable} from '@nestjs/common';
import {PlansDto} from "./dto/plans.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Plan} from "./plans.model";
import {where} from "sequelize";

@Injectable()
export class PlansService {

    constructor(@InjectModel(Plan) private plansRep:typeof  Plan) {
    }

    async creatPlan(dto:PlansDto){
        const plan = await this.plansRep.create(dto)
        return plan;
    }

    async findPlans(value:string){
        const plans = await this.plansRep.findAll({where: {value}})
    }

}
