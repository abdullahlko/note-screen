import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import InputArea from "./components/InputArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let notesString = localStorage.getItem("notes");
    if (notesString) {
      let savedNotes = JSON.parse(notesString);
      setNotes(savedNotes);
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  function addNote(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // <- optional: save after update
      return updatedNotes;
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((_, index) => index !== id);
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // <- optional: save after update
      return updatedNotes;
    });
  }

  function editNote(id, updatedNote) {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note, index) =>
        index === id ? updatedNote : note
      );
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <InputArea onAdd={addNote} />
        <div className="w-full flex flex-wrap justify-center gap-6 mt-8">
          {notes.map((note, index) => (
            <Note
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
