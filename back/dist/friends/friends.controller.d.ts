import { FriendsService } from "./friends.service";
export declare class FriendsController {
    private friendService;
    constructor(friendService: FriendsService);
    getAll(value: number): Promise<import("./friends.model").Friends[]>;
}
