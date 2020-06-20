import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import AddNote from './components/addNote'
import Note from './components/note'


function App() {

  const [notes,setNotes]=useState([]);
  const [searched,setSearched]=useState([])
  const [edit,setEdit]=useState({
    title:"",
    details:"",
    editNote:false
  })

  function handleSerach(note){
    setSearched(()=>{
      return notes.filter((noteItem)=>{
        if(noteItem.title.includes(note))
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
      return prev.filter((Array,index)=>{
        return index!=id
      })
    })
    setSearched(prev=>{
      return prev.filter((Array,index)=>{
        return index!=id
      })
    })
  }
  
  function Edit(title,detail){
    setEdit({
      title:title,
      details:detail,
      editNote:true
    })
  }


  return (
    <div className="App">
      <Header onSearch={handleSerach}/>
      <AddNote onAdd={handleAdd} edited={edit}/>

      {
        
      Array.map((noteItem,index)=>{
        return(<Note 
        key={index}
        id={index}
        title={noteItem.title}
        details={noteItem.details}
        onDelete={Delete}
        onEdit={Edit}
        />)
      })
    
      } 
      
    </div>
  );
}

export default App;
