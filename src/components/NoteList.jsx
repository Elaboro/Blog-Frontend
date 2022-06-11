import React from 'react';
import NoteItem from './NoteItem';
import CreateButton from './ui/button/CreateButton';

const NoteList = ({notes, title}) => {

    return(
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <CreateButton>Создать пост</CreateButton>
            </div>
            {notes.map(note =>
                <NoteItem note={note} key={note.note_id}/>
            )}
        </div>
    );
};

export default NoteList;
