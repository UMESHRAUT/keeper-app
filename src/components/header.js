import React from 'react';
import Search from './searchNote'
function Header(props){
    function searchFor(title){
        return props.onSearch(title)
    }
    return(
        <div className="header">
            <Search returnSearch={searchFor}/>
            <h1>Keeper</h1>
        </div>
    )
}
export default Header;