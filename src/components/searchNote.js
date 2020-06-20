import React, { useState } from 'react';
function Search(props){

    function handleChange(event){

        props.returnSearch(event.target.value);
    }

    return <input name='search' placeholder='search for note' className="search" onChange={handleChange} />
}
export default Search;