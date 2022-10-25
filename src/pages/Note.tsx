import React,
{
    useContext,
    useEffect,
    useState,
} from "react";
import NoteService from "../api/NoteService";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import CreateButton from "../components/ui/button/CreateButton";
import Modal from "../components/ui/modal/Modal";
import {
  AuthContext,
  AuthContextProps,
} from "../context";
import {
  INote,
  INoteDelete,
  INoteEdit,
} from "../api/entity/type";

const Note = () => {
    const [notes, setNote] = useState<INote[]>([]);
    const [modal, setModal] = useState<boolean>(false);
    const { isAuth } = useContext<AuthContextProps>(AuthContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const notes = await NoteService.getList();
        setNote(notes);
    };

    const onCreateNote = (newNote: INote) => {
        setNote([...notes, newNote]);
        setModal(false);
    };

    const onEditNote = async (note: INoteEdit) => {
        const newNote = await NoteService.edit(note);
        
        setNote(notes.map(
            note => note.note_id === newNote.note_id ? newNote : note
        ));
    };

    const onDeleteNote = async (note: INoteDelete) => {
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
                {isAuth && 
                <CreateButton onClick={()=> setModal(true)}>
                    Создать пост
                </CreateButton>
                }
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