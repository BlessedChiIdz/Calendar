
export class FriendsWDto{
   readonly user1Id:number;
    readonly user2Id:number;
    constructor(user1Id:number,user2Id:number) {
        this.user1Id = user1Id;
        this.user2Id = user2Id;
    }
}
export class FriendDeleteDto{
    readonly idForDel:number;
}
export class User1Dto{
    readonly user1Id:number;
}