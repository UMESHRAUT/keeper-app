import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import AddNote from './components/addNote'
import Note from './components/note'


function App() {

  const [notes,setNotes]=useState([]);
  const [searched,setSearched]=useState([])

  function handleSerach(note){
    setSearched(()=>{
      return notes.filter((noteItem)=>{
        if(note.length>0 && noteItem.title.includes(note))
        {
          return noteItem;
        }
    }) 
  });    
  }

  let Array=searched.length>0?searched:notes;
  searched.forEach(item=> console.log(item))


  function handleAdd(note){
    setNotes(prev=>{
      return [...prev,note]
    })
  }

  function Delete(id){
    setNotes(prev=>{
      return prev.filter((noteItem,index)=>{
        return index!=id
      })
    })
  }
  
  return (
    <div className="App">
      <Header onSearch={handleSerach}/>
      <AddNote onAdd={handleAdd}/>

      {
        
      Array.map((noteItem,index)=>{
        return(<Note 
        key={index}
        id={index}
        title={noteItem.title}
        details={noteItem.details}
        onDelete={Delete}
        />)
      })
    
      } 
      
    </div>
  );
}

export default App;
