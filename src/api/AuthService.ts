import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = process.env.REACT_APP_API_URL;

export default class AuthService {

    static async login (username, password) {
        const data = {
            username,
            password,
        };

        const response = await axios.post(`${API_URL}/auth/login`, data);

        localStorage.setItem("token", "Bearer " + response.data.token);
        return jwtDecode(response.data.token);
    }

    static async register (username, password) {
        const data = {
            username,
            password,
        };

        const response = await axios.post(`${API_URL}/auth/register`, data);

        localStorage.setItem("token", "Bearer " + response.data.token);
        return jwtDecode(response.data.token);
    }
}