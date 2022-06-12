import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes}) => {
    return(
        <div>
            {notes.map(note =>
                <NoteItem note={note} key={note.note_id}/>
            )}
        </div>
    );
};

export default NoteList;
