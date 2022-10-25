import React,
{
    useContext,
    useState,
    FC
} from 'react';
import { format } from '../utils/format/DateFormat';
import DeleteButton from './ui/button/DeleteButton';
import EditButton from './ui/button/EditButton';
import Modal from './ui/modal/Modal';
import NoteFormEdit from './NoteFormEdit';
import {
  AuthContext,
  AuthContextProps
} from '../context';
import {
  INote,
  INoteDelete,
  INoteEdit
} from "../api/entity/type";

export interface NoteItemProps {
  note: INote;
  key: INote["note_id"];
  callOnDeleteNote: (note: INoteDelete) => void;
  callOnEditNote: (note: INoteEdit) => void;
};

const NoteItem: FC<NoteItemProps> = ({
  note,
  callOnDeleteNote,
  callOnEditNote,
}) => {
    const {
        isAuth,
        user: { user_id },
    } = useContext<AuthContextProps>(AuthContext);

    const isAuthor = user_id === note.author.user_id;

    const [modal, setModal] = useState(false);
    const onSetModalVisible = () => setModal(false);

    return(
        <div className="note">

            <Modal visible={modal} setVisible={setModal}>
                <NoteFormEdit
                    note={note}
                    callOnEditNote={callOnEditNote}
                    callOnSetModalVisible={onSetModalVisible}
                />
            </Modal>

            <div className="note__author">
                {note.author.username}
            </div>
            <div className="note__content">
                {note.content}
            </div>
            <div className="note__created">
                {format(note.created)}
            </div>

            {isAuth && isAuthor &&
            <div className="note_btn">
                <EditButton onClick={() => setModal(true)}>Редактировать</EditButton>
                <DeleteButton onClick={() => callOnDeleteNote(note)}>Удалить</DeleteButton>
            </div>
            }

        </div>
    );
};

export default NoteItem;
