import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({notes, ...props}) => {
    return(
        <div>
            {notes.map(note =>
                <NoteItem
                    note={note}
                    key={note.note_id}
                    {...props}
                />
            )}
        </div>
    );
};

export default NoteList;
