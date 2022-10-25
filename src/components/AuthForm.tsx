import React,
{
    FC,
    useState,
} from "react";
import CreateButton from "./ui/button/CreateButton";
import ContentInput from "./ui/input/ContentInput";
import { AuthUser } from "../api/entity/type";

interface AuthFormProps {
    callOnCallback: (value: AuthUser) => void
};

const AuthForm: FC<AuthFormProps> = ({callOnCallback}) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const next = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const data = {
            username,
            password,
        };
    
        callOnCallback(data);
        
        setUsername("");
        setPassword("");
    };

    return(
        <form>
            <ContentInput
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                type="text"
                placeholder="Логин"
            />

            <ContentInput
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                type="password"
                placeholder="Пароль"
            />

            <CreateButton onClick={next}>Продолжить</CreateButton>
        </form>
    );
};

export default AuthForm;