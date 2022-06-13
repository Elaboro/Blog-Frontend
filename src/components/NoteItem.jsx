import React,
{
    useState,
} from 'react';
import { format } from '../utils/format/DateFormat';
import DeleteButton from './ui/button/DeleteButton';
import EditButton from './ui/button/EditButton';
import Modal from './ui/modal/Modal';
import NoteFormEdit from './NoteFormEdit';

const NoteItem = ({note, callOnDeleteNote, callOnEditNote}) => {
    const [modal, setModal] = useState(false);
    const onSetModalVisible = () => setModal(false);

    return(
        <div className="note">

            <Modal visible={modal} setVisible={setModal}>
                <NoteFormEdit note={note} callOnEditNote={callOnEditNote} callOnSetModalVisible={onSetModalVisible} />
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

            <div className="note_btn">
                <EditButton onClick={() => setModal(true)}>Редактировать</EditButton>
                <DeleteButton onClick={() => callOnDeleteNote(note)}>Удалить</DeleteButton>
            </div>

        </div>
    );
};

export default NoteItem;
