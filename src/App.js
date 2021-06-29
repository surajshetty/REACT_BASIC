import './App.css';
import React from 'react';
import Search from './component/Search';
import List from './component/List';
import Reducer from "./statemanagement/Reducer"
function App() {
  console.log("APP rendered...");
  console.log("APP component called");
  const [searchTxt,searchUpdater] = React.useState('');
  const list = [{name:"suraj","age":38,properties:{name:{type:"generic"}}},{name:"suresh",age:40,properties:{name:{type:"generic"}}},{name:"venki",age:45,properties:{name:{type:"generic"}}}];
  const [employees,employee_dispatcher_function] = React.useReducer(Reducer,[]);
  debugger;
  React.useEffect(()=>{
    employee_dispatcher_function({type:"SET_EMPOYEES",payload:list});
  },[]);

  console.log(searchTxt);

  const searchHandler = (value)=>{
    searchUpdater(value);
    employee_dispatcher_function({type:"SEARCH_EMPOYEES",payload:value})
  }
 
  return (
    <>
    <Search  searchTxt={searchTxt} searchHandler={searchHandler}/>
    <List list={employees}/>
    </>
  );
}

export default App;
