export class PlansDto{
    readonly date:string;
    readonly description:string;
}
export class PlanToFriendDto extends PlansDto{
    readonly id:number;
}