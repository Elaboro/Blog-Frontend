import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, title}) => {

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {notes.map(note =>
                <NoteItem note={note} key={note.note_id}/>
            )}
        </div>
    );
};

export default NoteList;
