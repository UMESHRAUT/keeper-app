import React, { useState } from 'react';
function Search(props){
    const [search,setSearch]=useState('');
     document.addEventListener('click',()=>{
         setSearch('');
     });
    function Reset(){
        setSearch('');
    }
    function handleChange(event){
        setSearch(event.target.value)
        props.returnSearch(event.target.value);
    }

    return<div className="search"><input name='search' placeholder='search for note' className="search-contain" value={search} onChange={handleChange} />
        <button onClick={Reset} className="search-button">clear</button>
    </div> 
}
export default Search;