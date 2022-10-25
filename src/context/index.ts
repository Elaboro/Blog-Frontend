import {
  createContext,
  Dispatch,
  SetStateAction
} from "react";
import { User } from "../api/entity/entities";
import { IUser } from "../api/entity/type";

export interface AuthContextProps {
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  isAuth: boolean;
  setUser: Dispatch<SetStateAction<IUser>>;
  user: IUser;
};

const initialValue: AuthContextProps = {
  setIsAuth: () => undefined,
  isAuth: false,
  setUser: () => undefined,
  user: new User(),
};

export const AuthContext = createContext<AuthContextProps>(initialValue);
