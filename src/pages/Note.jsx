import React,
{
    useEffect,
    useState
} from "react";
import NoteService from "../api/NoteService";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import CreateButton from "../components/ui/button/CreateButton";
import Modal from "../components/ui/modal/Modal";

const Note = () => {
    const [notes, setNote] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const notes = await NoteService.getList();
        setNote(notes);
    };

    const onCreateNote = (newNote) => {
        setNote([...notes, newNote]);
        setModal(false);
    };

    const onEditNote = async (note) => {
        const newNote = await NoteService.edit(note);
        
        setNote(notes.map(
            note => note.note_id === newNote.note_id ? newNote : note
        ));
    };

    const onDeleteNote = async (note) => {
        const oldNote = await NoteService.delete(note);

        setNote(notes.filter(
            note => note.note_id !== oldNote.note_id
        ));
    };

    return(
        <div>
            <Modal visible={modal} setVisible={setModal}>
                <NoteForm callOnCreateNote={onCreateNote} />
            </Modal>

            <h1 className="note__title">
                Блог на React
            </h1>
            
            <div className="note__panel_control">
                <CreateButton onClick={()=> setModal(true)}>
                    Создать пост
                </CreateButton>
            </div>
            
            <NoteList
                notes={notes}
                callOnDeleteNote={onDeleteNote}
                callOnEditNote={onEditNote}
            />
        </div>
    );
};

export default Note;