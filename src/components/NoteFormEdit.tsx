import React,
{
    FC,
    useState,
} from "react";
import CreateButton from "./ui/button/CreateButton";
import ContentInput from "./ui/input/ContentInput";
import {
  INote,
  INoteEdit,
} from "../api/entity/type";

interface NoteFormEditProps {
    note: INote;
    callOnEditNote: (note: INoteEdit) => void;
    callOnSetModalVisible: (value: boolean) => void;
};

const NoteFormEdit: FC<NoteFormEditProps> = ({
    note,
    callOnEditNote,
    callOnSetModalVisible
}) => {
    const [content, setContent] = useState<string>(note.content);

    const editNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
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