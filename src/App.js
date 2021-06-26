import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './component/Search';
import List from './component/List';
function App() {
  console.log("APP rendered...");
  console.log("APP component called");
  const [searchTxt,searchUpdater] = React.useState('');
  const list = [{name:"suraj","age":38,properties:{name:{type:"generic"}}},{name:"suresh",age:40,properties:{name:{type:"generic"}}},{name:"venki",age:45,properties:{name:{type:"generic"}}}];
  console.log(searchTxt);
  const filteredList= list.filter(item=>item.name.includes(searchTxt));
  console.log(filteredList);
  const searchHandler = (value)=>{
    debugger;
    searchUpdater(value);
  }
 
  return (
    <>
    <Search  searchTxt={searchTxt} searchHandler={searchHandler}/>
    <List list={filteredList}/>
    </>
  );
}

export default App;
