import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, callOnDeleteNote, callOnEditNote}) => {
    return(
        <div>
            {notes.map(note =>
                <NoteItem
                    note={note}
                    key={note.note_id}
                    callOnDeleteNote={callOnDeleteNote}
                    callOnEditNote={callOnEditNote}
                />
            )}
        </div>
    );
};

export default NoteList;
