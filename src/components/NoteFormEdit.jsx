import React,
{
    useState,
} from "react";
import CreateButton from "./ui/button/CreateButton";
import ContentInput from "./ui/input/ContentInput";

const NoteFormEdit = (props) => {
    const {
        note,
        callOnEditNote,
        callOnSetModalVisible,
    } = props;

    const [content, setContent] = useState(note.content);

    const editNote = async (e) => {
        e.preventDefault();

        const newNote = {
            ...note,
            content
        };

        callOnEditNote(newNote);
        callOnSetModalVisible(false);
    };

    return(
        <form>
            <ContentInput
                value={content}
                onChange={e => setContent(e.target.value)}
                type="text"
                placeholder="Введите текст"
            />
            <CreateButton onClick={editNote}>Сохранить</CreateButton>
        </form>
    );
};

export default NoteFormEdit;