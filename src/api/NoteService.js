import axios from 'axios';

export default class NoteService {
    static URL = "http://localhost:3001";

    static async getList() {
        const response = await axios.get(`${this.URL}/blog/note`);
        return response.data;
    }

    static async create(newNote) {
        const response = await axios.post(`${this.URL}/blog/note/create`,
            newNote,
            {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            }
        );
        return response.data;
    }
}