import React from 'react';
import { format } from '../utils/format/DateFormat';
import DeleteButton from './ui/button/DeleteButton';
import EditButton from './ui/button/EditButton';

const NoteItem = ({note}) => {

    return(
        <div className="note">

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
                <EditButton disabled>Редактировать</EditButton>
                <DeleteButton>Удалить</DeleteButton>
            </div>

        </div>
    );
};

export default NoteItem;
