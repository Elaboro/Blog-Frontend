import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getConfig = () => {
    return {
        headers: {
            Authorization: localStorage.getItem("token"),
        }
    }
};

export default class NoteService {

    static async getList() {
        const response = await axios.get(`${API_URL}/blog/note`);
        return response.data;
    }

    static async create(note) {
        const data = { ...note };

        const response = await axios.post(`${API_URL}/blog/note/create`,
            data,
            getConfig()
        );
        return response.data;
    }

    static async delete(note) {
        const {
            note_id,
            content
        } = note;

        const data = {
            note_id,
            content
        };

        const response = await axios.delete(`${API_URL}/blog/note/delete`,
            {
                ...getConfig(),
                data
            }
        );
        return response.data;
    }

    static async edit(note) {
        const {
            note_id,
            content
        } = note;

        const data = {
            note_id,
            content
        };

        const response = await axios.put(`${API_URL}/blog/note/edit`,
            data,
            getConfig()
        );
        return response.data;
    }
}