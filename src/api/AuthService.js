import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default class AuthService {

    static async login (username, password) {
        const response = await axios.post(`${API_URL}/auth/login`,
            {
                username: username,
                password: password
            }
        );

        localStorage.setItem("token", "Bearer " + response.data.token);
        return true;
    }
}