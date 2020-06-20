import React from 'react';
function Note(props){

    function handleClick(){
        props.onDelete(props.id)
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.details}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}
export default Note;