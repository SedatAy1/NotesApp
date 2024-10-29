import React, { useState } from 'react';
import NoteItem from './NoteItem';
import ColorPicker from './ColorPicker';
import './NotesApp.css';

const NotesApp = () => {
  const [notes, setNotes] = useState([]); // Notları tutacak durum
  const [noteText, setNoteText] = useState(''); // Notun içeriğini tutacak durum
  const [searchQuery, setSearchQuery] = useState(''); // Arama kutusu için durum
  const [selectedColor, setSelectedColor] = useState('pink'); // Renk seçimi için durum

  // Yeni not ekleme fonksiyonu
  const addNote = () => {
    if (noteText.trim() === '') return;
    setNotes([...notes, { text: noteText, color: selectedColor }]); // Yeni notu mevcut notlara ekle
    setNoteText(''); // Not alanını temizle
  };

  // Arama sorgusuna göre notları filtreleme
  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="notes-app">
      <h1>NotesApp</h1>
      {/* Arama kutusu */}
      <input
        type="text"
        placeholder="Ara..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Not girişi ve renk seçici */}
      <div className="note-input">
        <textarea
          placeholder="Notunuzu buraya yazın..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
        <ColorPicker selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <button onClick={addNote}>EKLE</button>
      </div>
      {/* Notların listelendiği alan */}
      <div className="notes-list">
        {filteredNotes.map((note, index) => (
          <NoteItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesApp;