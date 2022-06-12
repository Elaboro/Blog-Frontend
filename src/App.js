import React,
{
  useEffect
} from 'react';
import AuthService from './api/AuthService';
import Note from './pages/Note';
import './styles/App.css';

function App() {

  useEffect(() => {
    (async ()=>{
      await AuthService.login("user", "user");
    })();
  }, []);

  return (
    <div className="App">
      <Note />
    </div>
  );
}

export default App;
