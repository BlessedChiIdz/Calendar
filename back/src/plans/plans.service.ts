import {Injectable} from '@nestjs/common';
import {PlansDto, PlanToFriendDto} from "./dto/plans.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Plan} from "./plans.model";
import {Friends} from "../friends/friends.model";
import {FriendsService} from "../friends/friends.service";

@Injectable()
export class PlansService {
    constructor(@InjectModel(Plan) private plansRep:typeof  Plan,
                private friendService:FriendsService
                ) {
    }

    async creatPlan(dto:PlansDto){
        const plan = await this.plansRep.create(dto)
        return plan;
    }

    async findPlans(value:string){
        const plans = await this.plansRep.findAll({where: {value}})
        return plans;
    }

    async linkPlanToAllFriends(dto:PlanToFriendDto){
        const plan = await this.creatPlan(dto);
        const id = dto.id;
        const friends:Friends[] = await this.friendService.getAll(id);
        await friends.forEach(function (friend){
            friend.$set('plans',[plan.id]);
        })
    }
}
