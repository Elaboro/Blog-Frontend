import React,
{
    useState,
} from "react";
import CreateButton from "./ui/button/CreateButton";
import ContentInput from "./ui/input/ContentInput";

const AuthForm = ({callOnCallback}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const next = async (e) => {
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
                onChange={e => setUsername(e.target.value)}
                type="text"
                placeholder="Логин"
            />

            <ContentInput
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Пароль"
            />

            <CreateButton onClick={next}>Продолжить</CreateButton>
        </form>
    );
};

export default AuthForm;