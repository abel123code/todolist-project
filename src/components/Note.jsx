import React, { useState } from "react";

function Note(props) {
  const [isEdit , setIsEdit] = useState(false)
  const [newEdit , editTask] = useState({
    newTitle: '',
    newContent: '',
  })

  function handleEdit() {
    setIsEdit(!isEdit);
  }

  function reflectEdit(event) {
    const {name,value} = event.target;
    editTask((prevValue) => {
      return {
        ...prevValue,
        [name]:value
      }
    })
  }

  function submitEdit(event) {
    event.preventDefault();
    const id = props.id;
    const finalTitle = newEdit.newTitle;
    const finalContent = newEdit.newContent;

    //console.log(finalTitle);
    //console.log(finalContent);
    //console.log(id);
    props.onEdit(id,finalTitle,finalContent)
    setIsEdit(false)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {isEdit ? (
        <form className="edit-note">
          <p>Edit note:</p>
          <input name='newTitle' placeholder="Title" onChange={reflectEdit} />
          <input name='newContent' placeholder="Edit a note" onChange={reflectEdit} />
          <button className="confirm-button" onClick={submitEdit}>🗸</button>
        </form>) : null
      }
      
      <button onClick={() => {
        props.onDelete(props.id)
      }}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}

export default Note;