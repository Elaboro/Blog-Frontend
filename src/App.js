import React,
{
  useEffect,
  useState,
} from 'react';
import AuthService from './api/AuthService';
import { AuthContext } from './context';
import Note from './pages/Note';
import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async ()=>{
      const user = await AuthService.login("user", "user");
      if(user) {
        setIsAuth(true);
        setUser(user);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      user,
    }}>
      <div className="App">
        <Note />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
