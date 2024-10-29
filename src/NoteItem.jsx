import React from 'react';

const NoteItem = ({ note }) => {
  return (
    <div className="note-item" style={{ backgroundColor: note.color }}>
      {note.text}
    </div>
  );
};

export default NoteItem;