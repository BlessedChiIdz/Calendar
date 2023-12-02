import { PlansService } from "./plans.service";
import { PlansDto } from "./dto/plans.dto";
export declare class PlansController {
    private plansService;
    constructor(plansService: PlansService);
    create(dto: PlansDto): Promise<import("./plans.model").Plans>;
}
