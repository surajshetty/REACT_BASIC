import React from 'react';

const Search = (props)=>{
   const searchHandler = (event)=>{
      props.searchHandler(event.target.value);
   }
   return (
       <div>
           <input type="text"  onChange={searchHandler}/>
           <label value={props.searchTxt}>{props.searchTxt}</label>

       </div>
   )
}


export default Search;