import React, { useState } from "react";

function CreateArea(props) {
  // creating a constant note amd function setNote to update it. setting state , 
  // the initial state is going to be an empty title and an empty content
  // now we can use this note in our input and text area
  // now we have got our inputs(input,textarea) control ,next step is to update them when they get changed 
  // so addiing onCange to inputs, inside it will be afunctioncalled handelchange
  // handlChange is going to recieve an event when it gets triggerred , so in this case we are going to destructure the event 
  // so that we get hold of the target .name .val so we are going to create a destructur object 
  // now we can use this name and values as seprate constants and i am goig to add to my note by calling setNote
  // setNote will receive prev note and we will use that to add to existing note 
  // now we are going to trigger this  addNote() by getting hold of the props that gets passed over
  // specially the props.onAdd
  //passing on addNote currently created note
  
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    //destructured object
    const { name, value } = event.target;

    
    setNote(prevNote => {
      //return previous note and in addition add new name and value
      return {
        ...prevNote,// this is spread operator which will spread all of key, value pair that are currently in existence in our notes
        // and add it to the finall object, this waY WHNE WE START  typing we will see it saved insite our state
        [name]: value// this syntax simply turns name key from just string name for the key to actual value of name 
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          // using note created above
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          // using note created above
          value={note.content}
          placeholder="Note"
          rows="3"
        />
        {/* //2.adding  onclick and try to passback the created no to app.jsx 
        when we click a button entire screen reflashes so to prevent this we pass the event to this submitNote()*/}
        <button onClick={submitNote}>＋</button>
      </form>
    </div>
  );
}

export default CreateArea;
