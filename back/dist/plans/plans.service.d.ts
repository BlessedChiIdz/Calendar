import { PlansDto, PlanToFriendDto } from "./dto/plans.dto";
import { Plan } from "./plans.model";
import { FriendsService } from "../friends/friends.service";
export declare class PlansService {
    private plansRep;
    private friendService;
    constructor(plansRep: typeof Plan, friendService: FriendsService);
    creatPlan(dto: PlansDto): Promise<Plan>;
    findPlans(value: string): Promise<Plan[]>;
    linkPlanToAllFriends(dto: PlanToFriendDto): Promise<void>;
}
