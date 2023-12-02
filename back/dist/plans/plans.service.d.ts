import { PlansDto } from "./dto/plans.dto";
import { Plans } from "./plans.model";
export declare class PlansService {
    private plansRep;
    constructor(plansRep: typeof Plans);
    creatPlan(dto: PlansDto): Promise<Plans>;
}
