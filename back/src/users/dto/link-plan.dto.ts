import {User} from "../users.model";

export class LinkPlanDto{
    readonly date:string;
    readonly description:string;
    readonly usersId:number[];
}