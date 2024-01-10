import { PlansDto } from "./dto/plans.dto";
import { Plan } from "./plans.model";
export declare class PlansService {
    private plansRep;
    constructor(plansRep: typeof Plan);
    creatPlan(dto: PlansDto): Promise<Plan>;
    findPlans(value: string): Promise<Plan[]>;
}
