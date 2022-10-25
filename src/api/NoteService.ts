import axios, { AxiosRequestConfig } from 'axios';
import {
  INote,
  INoteCreate,
  INoteDelete,
  INoteEdit,
} from "./entity/type";

const API_URL = process.env.REACT_APP_API_URL;

const getConfig = (): AxiosRequestConfig => {
    return {
        headers: {
            Authorization: localStorage.getItem("token") || "",
        }
    }
};

export default class NoteService {

    static async getList(): Promise<INote[]> {
        const response = await axios.get<INote[]>(`${API_URL}/blog/note`);
        return response.data;
    }

    static async create(note: INoteCreate): Promise<INote> {
        const response = await axios.post<INote>(`${API_URL}/blog/note/create`,
            note,
            getConfig()
        );
        return response.data;
    }

    static async delete(note: INoteDelete): Promise<INote> {
        const response = await axios.delete<INote>(`${API_URL}/blog/note/delete`,
            {
                ...getConfig(),
                data: note
            }
        );
        return response.data;
    }

    static async edit(note: INoteEdit): Promise<INote> {
        const response = await axios.put<INote>(`${API_URL}/blog/note/edit`,
            note,
            getConfig()
        );
        return response.data;
    }
}