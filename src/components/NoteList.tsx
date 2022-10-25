import React, { FC } from 'react';
import NoteItem from './NoteItem';
import {
  INote,
  INoteDelete,
  INoteEdit
} from "../api/entity/type";

interface NoteListProps {
    notes: INote[];
    callOnDeleteNote: (note: INoteDelete) => void;
    callOnEditNote: (note: INoteEdit) => void;
};

const NoteList: FC<NoteListProps> = ({
    notes,
    ...props
}) => {
    return(
        <div>
            {notes.map((note: INote) =>
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
