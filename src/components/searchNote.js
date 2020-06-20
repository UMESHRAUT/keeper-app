import React, { useState } from 'react';
import AddNote from './addNote';
function Search(props){
    // const [searchItem,setSearchItem]=useState('');

    function handleChange(event){
        // setSearchItem(event.target.value)

        return props.returnSearch(event.target.value);
    }

    return <input name='search' placeholder='search for note' className="search" onChange={handleChange} />
}
export default Search;