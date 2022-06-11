import React from 'react';
import { format } from '../utils/format/DateFormat';

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

        </div>
    );
};

export default NoteItem;
