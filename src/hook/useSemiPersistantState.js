import React from 'react';
// follow the convention of use prefic for hooks

const useSemiPersistantState = (key,initialValue='')=>{
   // use value as the state store
   const [value,updater] = React.useState(localStorage.getItem(key)||initialValue);

   React.useEffect(()=>{
       
       localStorage.setItem(key,value)
   },[value,key])


 // follow the convetion to send value an its updater as a array warapped the way useState hook does
   return [value,updater];
} 


export default useSemiPersistantState;