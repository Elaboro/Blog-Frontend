import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NoteList from './components/NoteList';
import './styles/App.css';

function App() {
  const [notes, setNote] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await axios.get("http://localhost:3001/blog/note");
    setNote(response.data);
  }

  return (
    <div className="App">
      <NoteList notes={notes} title="Блог на React"/>
    </div>
  );
}

export default App;
