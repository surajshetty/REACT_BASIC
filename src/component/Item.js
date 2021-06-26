import React from 'react'

function Item ({name,age,properties}){
    console.log("Item rendered ...")
   
    const li =  <li >{name} {age} {properties.name}</li>
    properties.name = "nongeneric";
     return li;
}

export default Item;