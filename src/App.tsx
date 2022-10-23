import React,
{
  useEffect,
  useState,
} from 'react';
import AuthMenu from './components/AuthMenu';
import { AuthContext } from './context';
import Note from './pages/Note';
import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || {};
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
