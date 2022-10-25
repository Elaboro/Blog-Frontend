import React,
{
  useEffect,
  useState,
} from 'react';
import AuthMenu from './components/AuthMenu';
import { AuthContext } from './context';
import Note from './pages/Note';
import './styles/App.css';
import { User } from "./api/entity/entities";
import { IUser } from "./api/entity/type";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>(new User());

  useEffect(() => {
    const user_data = localStorage.getItem("user");
    const user: IUser = user_data
        ? JSON.parse(user_data as string)
        : new User();

    setUser(user);

    const authStatus = (localStorage.getItem("auth") === "true");
    setIsAuth(authStatus);
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      user,
      setUser,
    }}>
      <div className="App">
        <AuthMenu />
        <Note />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
