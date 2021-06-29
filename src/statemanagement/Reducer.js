// reducer function has state (the state that will be maintained by react) and action that is passed by dispatcher function returned by useReducer
function Reducer(state,action){
    debugger;
    switch(action.type){
       case "SET_EMPOYEES":
              return action.payload;
       case "SEARCH_EMPOYEES":
       
              return state.filter(emplyee=>emplyee.name.includes(action.payload)) 
       
    }
  
   
}

export default Reducer;