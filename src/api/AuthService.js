import axios from "axios";

export default class AuthService {
    static URL = "http://localhost:3001";

    static async login (username, password) {
        const response = await axios.post(`${this.URL}/auth/login`,
            {
                username: username,
                password: password
            }
        );

        localStorage.setItem("token", "Bearer " + response.data.token);
        return true;
    }
}