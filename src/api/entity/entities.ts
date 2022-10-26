import { IUser } from "./type";

export class User implements IUser {
    user_id: string = "";
    username: string = "";

    constructor(user?: Partial<User>) {
        Object.assign(this, user);
    }
}
