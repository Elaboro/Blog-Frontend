import React,
{
    FC,
    useState,
} from "react";
import NoteService from "../api/NoteService";
import CreateButton from "./ui/button/CreateButton";
import ContentInput from "./ui/input/ContentInput";
import { INote } from "../api/entity/type";

interface NoteFormProps {
    callOnCreateNote: (note: INote) => void;
}

const NoteForm: FC<NoteFormProps> = ({
    callOnCreateNote
}) => {
    const [content, setContent] = useState<string>("");

    const addNewNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
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