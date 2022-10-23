import React,
{
    useState,
} from "react";
import NoteService from "../api/NoteService";
import CreateButton from "./ui/button/CreateButton";
import ContentInput from "./ui/input/ContentInput";

const NoteForm = ({callOnCreateNote}) => {
    const [content, setContent] = useState("");

    const addNewNote = async (e) => {
        e.preventDefault();
    
        const newNote = await NoteService.create({
            content: content
        });
    
        callOnCreateNote(newNote);
        setContent("");
    };

    return(
        <form>
            <ContentInput
                value={content}
                onChange={e => setContent(e.target.value)}
                type="text"
                placeholder="Введите текст"
            />
            <CreateButton onClick={addNewNote}>Сохранить пост</CreateButton>
        </form>
    );
};

export default NoteForm;