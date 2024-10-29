import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Varsa genel stil dosyanız
import NotesApp from './NotesApp'; // Ana bileşeni doğru import edin

ReactDOM.render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>,
  document.getElementById('root')
);