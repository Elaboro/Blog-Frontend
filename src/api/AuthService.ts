import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  AuthPayload,
  AuthUser,
  IUser,
} from "./entity/type";

const API_URL = process.env.REACT_APP_API_URL;

export default class AuthService {

    static async login (user: AuthUser): Promise<IUser> {
        const response = await axios.post<AuthPayload>(`${API_URL}/auth/login`, user);
        return this.authorize(response.data);
    }

    static async register (user: AuthUser): Promise<IUser> {
        const response = await axios.post<AuthPayload>(`${API_URL}/auth/register`, user);
        return this.authorize(response.data);
    }

    private static authorize (payload: AuthPayload): Promise<IUser> {
        localStorage.setItem("token", "Bearer " + payload.token);
        return jwtDecode(payload.token);
    }
}