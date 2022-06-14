import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export default class NoteService {

    static async getList() {
        const response = await axios.get(`${API_URL}/blog/note`);
        return response.data;
    }

    static async create(newNote) {
        const response = await axios.post(`${API_URL}/blog/note/create`,
            newNote,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        );
        return response.data;
    }

    static async delete({note_id}) {
        const response = await axios.delete(`${API_URL}/blog/note/delete`,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                },
                data: { note_id } 
            }
        );
        return response.data;
    }

    static async edit({note_id, content}) {
        const response = await axios.put(`${API_URL}/blog/note/edit`,
            {
                note_id,
                content
            },
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        );
        return response.data;
    }
}