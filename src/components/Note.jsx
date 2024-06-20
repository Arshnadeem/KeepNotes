// import React from "react";

// function Note(props) {
//   //handleClick
//   function handleClick() {
//     props.onDelete(props.id);
//   }

//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//       <button onClick={handleClick}>DELETE</button>
//     </div>
//   );
// }

// export default Note;
import React, { useState } from "react";

function Note({ id, title, content, onDelete, onStartEdit, isEditing, onFinishEdit }) {
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleStartEdit = () => {
    onStartEdit(id);
  };

  const handleFinishEdit = () => {
    onFinishEdit({ id, title: editedTitle, content: editedContent });
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input type="text" value={editedTitle} onChange={handleTitleChange} />
          <textarea value={editedContent} onChange={handleContentChange} />
          <button onClick={handleFinishEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={handleStartEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Note;
