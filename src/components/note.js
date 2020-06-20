import React from 'react';
import AddNote from './addNote';
function Note(props){

    function handleClick(){
        return props.onDelete(props.id)
    }
    function handleEdit(){
        console.log(props.title,props.details);
        props.onDelete(props.id)
        return props.onEdit(props.title,props.details)
        // <AddNote title={props.title} details={props.details} id={props.id}/>
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.details}</p>
            <button onClick={handleEdit}>Edit</button>

            <button onClick={handleClick}>Delete</button>
        </div>
    )
}
export default Note;