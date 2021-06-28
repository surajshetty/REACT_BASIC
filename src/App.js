import logo from './logo.svg';
import './App.css';
import React from 'react';
import InputWithLabel from './component/InputWithLabel';
import List from './component/List';
import useSemiPersistantState from './hook/useSemiPersistantState';

function App() {
  console.log("APP rendered...");
  console.log("APP component called");
  
  //const [searchTxt,searchUpdater] = React.useState(localStorage.getItem('search')||'');
  const  [searchTxt,searchUpdater] = useSemiPersistantState("search","");
  const [isFocused1,updateFocus1] = useSemiPersistantState("isFocused1",false);
  const [isFocused2,updateFocus2] = useSemiPersistantState("isFocused2",false);
  
  setInterval(()=>{
    
    if(isFocused1){
      updateFocus2(true);
      updateFocus1(false);
    }else{
      updateFocus1(true)
      updateFocus2(false);
    }
   
    
  },10000)
  const list = [{name:"suraj","age":38,properties:{name:{type:"generic"}}},{name:"suresh",age:40,properties:{name:{type:"generic"}}},{name:"venki",age:45,properties:{name:{type:"generic"}}}];
  console.log(searchTxt);
  const filteredList= list.filter(item=>item.name.includes(searchTxt));
  console.log(filteredList);
  // get to know when the state changes with useEffect hook
  /*React.useEffect(()=>{
      console.log("useEffect hook here : state for searchTxt has changed!!!!");
      localStorage.setItem('search',searchTxt);

  },[searchTxt])*/
  const searchHandler = (value)=>{
    debugger;
    searchUpdater(value);
  }
 //******  make search component generic and provide focus imperatively   *********
  return (
    // this is a fragment tag it does not add a extra dom element and helps in aggregating multiple sibling componenets
    // as we use [] wrapped in place of fragment but in that case key is mandatory for each sibling componenet
    <>
    <InputWithLabel  type="text" text={searchTxt} changeHandler={searchHandler} autoFocus={isFocused1}>
      <strong>compostion value</strong>
    </InputWithLabel>
    <List list={filteredList}/>

    <InputWithLabel  type="text" text={searchTxt} changeHandler={searchHandler} autoFocus={isFocused2}>
      <strong>compostion value</strong>
    </InputWithLabel>
    <List list={filteredList}/>
    </>
  );
}

export default App;
