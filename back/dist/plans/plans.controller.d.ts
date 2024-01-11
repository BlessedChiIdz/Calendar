import { PlansService } from "./plans.service";
import { PlansDto, PlanToFriendDto } from "./dto/plans.dto";
export declare class PlansController {
    private plansService;
    constructor(plansService: PlansService);
    create(dto: PlansDto): Promise<import("./plans.model").Plan>;
    planToAllFriends(dto: PlanToFriendDto): Promise<void>;
}
