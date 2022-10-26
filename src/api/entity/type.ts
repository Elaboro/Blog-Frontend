export interface IUser {
    user_id: string;
    username: string;
}

export interface INote {
    note_id: string;
    content: string;
    author: IUser;
    created: Date;
}

export interface INoteCreate {
    content: INote["content"];
}

export interface INoteEdit {
    note_id: INote["note_id"];
    content: INote["content"];
}

export interface INoteDelete {
    note_id: INote["note_id"];
}

export interface AuthPayload {
    token: string;
}

export interface AuthUser {
    username: string;
    password: string;
}