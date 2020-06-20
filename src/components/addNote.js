import React, { useState } from  'react';
function AddNote(props){

    console.log(props.id);
    console.log(props.edited.details);
    
    
    const [note,setNote]=useState({
        title:props.edited.title ,
        details:props.edited.details
    });
    

    function handleChange(event){
        const{name,value}=event.target;
        setNote(prev=>{
            return {...prev,[name]:value}
        })
    }

    function submitNote(event){
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title:"",
            details:""
        })
    }

    if(props.edited.editNote===true){
        setNote({
            title:props.edited.title,
            details:props.edited.details
        })
        props.edited.editNote=false
    }

    return(
        <form>
            <input 
            name="title"
            placeholder="title.." 
            onChange={handleChange} 
            value={note.title}

            ></input>
            <textarea 
            name="details" 
            placeholder="take a note" 
            onChange={handleChange} 
            value={note.details}
            ></textarea>
            <button onClick={submitNote}>Add</button>
        </form>
    )
}
export default AddNote;