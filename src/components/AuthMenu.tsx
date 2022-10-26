import React,
{
    useContext,
    useState,
} from 'react'
import AuthService from '../api/AuthService';
import {
  AuthContext,
  AuthContextProps,
} from '../context';
import AuthForm from './AuthForm';
import RegularButton from './ui/button/RegularButton';
import Modal from './ui/modal/Modal';
import { User } from "../api/entity/entities";
import {
  AuthUser,
  IUser,
} from "../api/entity/type";

const Menu = () => {
    const [modalLogin, setModalLogin] = useState<boolean>(false);
    const [modalRegister, setModalRegister] = useState<boolean>(false);

    const {
        setUser,
        setIsAuth,
        isAuth,
    } = useContext<AuthContextProps>(AuthContext);

    const onLogin = async (authUserData: AuthUser) => {
        const user = await AuthService.login(authUserData);
        loggedIn(user);

        setModalLogin(false);
    };

    const onRegister = async (authUserData: AuthUser) => {
        const user: IUser = await AuthService.register(authUserData);
        loggedIn(user);

        setModalRegister(false);
    };

    const loggedIn  = (user: IUser) => {
        if(user) {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("auth", "true");

            setIsAuth(true);
            setUser(user);
        }
    };

    const logout = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setIsAuth(false);
        setUser(new User());
    }

    return (
        <div className="menu">
            {isAuth
                ? <RegularButton onClick={()=> logout()}>Выход</RegularButton>
                : <div>
                    <Modal visible={modalLogin} setVisible={setModalLogin}>
                        <div className='auth__title'>Авторизация</div>
                        <AuthForm callOnAuthorizeUser={onLogin} />
                    </Modal>

                    <Modal visible={modalRegister} setVisible={setModalRegister}>
                        <div className='auth__title'>Регистрация</div>
                        <AuthForm callOnAuthorizeUser={onRegister} />
                    </Modal>

                    <RegularButton onClick={()=> setModalLogin(true)}>Авторизоваться</RegularButton>
                    <RegularButton onClick={()=> setModalRegister(true)}>Зарегистрироваться</RegularButton>
                </div>
            }
            
        </div>
    );
}

export default Menu;