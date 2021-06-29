import logo from './logo.svg';
import './App.css';
import React from 'react';
import Search from './component/Search';
import List from './component/List';
import dummyAPI from './api/dummyapi';
function App() {
  console.log("APP rendered...");
  console.log("APP component called");
  const [searchTxt,searchUpdater] = React.useState('');
  const [list,updateList] = React.useState([]);
  const [isLoading,updateIsLoading] = React.useState(false);
  const [isError,updateIsError] = React.useState(false);
  //const list = [{name:"suraj","age":38,properties:{name:{type:"generic"}}},{name:"suresh",age:40,properties:{name:{type:"generic"}}},{name:"venki",age:45,properties:{name:{type:"generic"}}}];
  console.log(searchTxt);
  const filteredList= list.filter(item=>item.name.includes(searchTxt));
  console.log(filteredList);
  const searchHandler = (value)=>{
    searchUpdater(value);
  }
 // use a useEffect to get called without any dependency changes
 React.useEffect(()=>{
  updateIsLoading(true);
     console.log("use Effect called without any dependency");
     dummyAPI().then((res)=>{
      updateList(res.data);
      updateIsLoading(false);
      updateIsError(false);
     }).catch(()=>{updateIsError(true);updateIsLoading(false);});
     
 },[])
  return (
    <>
    {isError && <p>Something happened in API</p>}
    <Search  searchTxt={searchTxt} searchHandler={searchHandler}/>
    {isLoading?"LOADING....":<List list={filteredList}/>}
    </>
  );
}

export default App;
