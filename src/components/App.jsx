import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Note';

function App() {
  const [taskList , setTaskList ] = useState([]);

  function submitNote(newnote) {
    //console.log('submit triggered');
    setTaskList((prevValue) => {
      return [...prevValue,newnote];
    })
  }

  function deleteNote(id) {
    setTaskList(prevValue => {
      return prevValue.filter((item,index) => {
        return index !== id;
      })
    })
  }

  function editNote(id,newTitle,newContent) {
    //console.log('edit triggered for', id);
    //console.log(newTitle);
    //console.log(newContent);

    setTaskList(prevValue => {
      return prevValue.map((item,index) => {
        //since id is the index of the item in the array 
        if (index === id) {
          return {
            title: newTitle,
            content: newContent,
          }
        } else {
          return item
        }
      })
    })
  }

  return (
    <>
      <Header />
      <CreateArea onAdd={submitNote} />
      {taskList.map((item,index) => {
        console.log('item:',index)
        return <Note key={index} id={index} title={item.title} content={item.content} onDelete={deleteNote} onEdit={editNote} />
      })}
    </>
  )
}

export default App;