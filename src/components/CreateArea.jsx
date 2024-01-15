import React, { useState } from "react";

function CreateArea(props) {
  const [note , setNote] = useState({
    title: '',
    content: '',
  })

  function handleChange(event) {
    const {name,value} = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    props.onAdd(note)
    setNote({
      title: '',
      content: '',
    })
    event.preventDefault();
  }

  return (
    <div className="createArea">
      <form className="create-form">
        <input name='title' placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." onChange={handleChange} value={note.content} rows='3' />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}

export default CreateArea;