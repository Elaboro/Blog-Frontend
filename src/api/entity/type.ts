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
    content: string;
}

export interface INoteEdit {
    note_id: string;
    content: string;
}

export interface INoteDelete {
    note_id: string;
}

export interface AuthPayload {
    token: string;
}

export interface AuthUser {
    username: string;
    password: string;
}