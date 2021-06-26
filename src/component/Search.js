import React from 'react';

const Search = (props)=>{
   const searchHandler = (event)=>{
      props.searchHandler(event.target.value);
   }
   return (
       <div>
           <input type="text" value={props.searchTxt} onChange={searchHandler}/>
           <label value={props.searchTxt}>{props.children}</label>

       </div>
   )
}


export default Search;