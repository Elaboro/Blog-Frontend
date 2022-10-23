import React,
{
    useContext,
    useState,
} from 'react'
import AuthService from '../api/AuthService';
import { AuthContext } from '../context';
import AuthForm from './AuthForm';
import RegularButton from './ui/button/RegularButton';
import Modal from './ui/modal/Modal';

const Menu = () => {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalRegister, setModalRegister] = useState(false);

    const {
        setUser,
        setIsAuth,
        isAuth,
    } = useContext(AuthContext);

    const onLogin = async ({username, password}) => {
        const user = await AuthService.login(username, password);
        loggedIn(user);

        setModalLogin(false);
    };

    const onRegister = async ({username, password}) => {
        const user = await AuthService.register(username, password);
        loggedIn(user);

        setModalRegister(false);
    };

    const loggedIn  = (user) => {
        if(user) {
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("auth", true);

            setIsAuth(true);
            setUser(user);
        }
    };

    const logout = () => {
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setIsAuth(false);
        setUser({});
    }

    return (
        <div className="menu">
            {isAuth
                ? <RegularButton onClick={()=> logout()}>Выход</RegularButton>
                : <div>
                    <Modal visible={modalLogin} setVisible={setModalLogin}>
                        <div className='auth__title'>Авторизация</div>
                        <AuthForm callOnCallback={onLogin} />
                    </Modal>

                    <Modal visible={modalRegister} setVisible={setModalRegister}>
                        <div className='auth__title'>Регистрация</div>
                        <AuthForm callOnCallback={onRegister} />
                    </Modal>

                    <RegularButton onClick={()=> setModalLogin(true)}>Авторизоваться</RegularButton>
                    <RegularButton onClick={()=> setModalRegister(true)}>Зарегистрироваться</RegularButton>
                </div>
            }
            
        </div>
    );
}

export default Menu;