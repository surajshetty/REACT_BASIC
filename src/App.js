import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './component/Search';
import List from './component/List';
import useSemiPersistantState from './hook/useSemiPersistantState';
function App() {
  console.log("APP rendered...");
  console.log("APP component called");
  //const [searchTxt,searchUpdater] = React.useState(localStorage.getItem('search')||'');
  const  [searchTxt,searchUpdater] = useSemiPersistantState("search","");
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
 
  return (
    // this is a fragment tag it does not add a extra dom element and helps in aggregating multiple sibling componenets
    // as we use [] wrapped in place of fragment but in that case key is mandatory for each sibling componenet
    <>
    <Search  searchTxt={searchTxt} searchHandler={searchHandler}/>
    <List list={filteredList}/>
    </>
  );
}

export default App;
