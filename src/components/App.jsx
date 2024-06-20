// import React, { useState } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import Note from "./Note";
// import CreateArea from "./CreateArea";

// function App() {
//   // 3.creating new constant, and the initial value for my note is an empty array
//   const [notes, setNotes] = useState([]);


// //creating a funxtion add node
//   function addNote(newNote) {
//     // add to notes array
//     setNotes(prevNotes => {
//       return [...prevNotes, newNote];// this is spread operator which will spread all of key, value pair that are currently in existence in our notes and 
//       //appending new node
//     });
//   }

//   function deleteNote(id) {
//     setNotes(prevNotes => {
//       //filtering noteItem correcponding to index
//       return prevNotes.filter((noteItem, index) => {
//         return index !== id;
//       });
//     });
//   }
  

//   return (
//     <div>
//       <Header />
//       {/* added addNote as value for one of the props */}
//       <CreateArea onAdd={addNote} />
//       {/* map function will loop through the array and get hold of each item in noteItem inside and execute this function */}
//       {notes.map((noteItem, index) => {
//         return (
//           //new note component
//           <Note
//             key={index}
//             id={index}
//             title={noteItem.title}
//             content={noteItem.content}
//             onDelete={deleteNote}
//           />
//         );
//       })}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNoteId, setEditNoteId] = useState(null); // Track which note is being edited

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  function startEdit(id) {
    setEditNoteId(id); // Set the note id being edited
  }

  function finishEdit(updatedNote) {
    setNotes(prevNotes => prevNotes.map((noteItem, index) => (index === updatedNote.id ? updatedNote : noteItem)));
    setEditNoteId(null); // Reset edit mode after update
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
          onStartEdit={startEdit}
          isEditing={editNoteId === index}
          onFinishEdit={finishEdit}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
