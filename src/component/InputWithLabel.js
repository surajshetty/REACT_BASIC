import React from 'react';

const InputWithLabel = ({type,text,changeHandler,autoFocus,children})=>{
   const ref = React.useRef();
   const handler = (event)=>{
    changeHandler(event.target.value);
   }
   React.useEffect(()=>{
       console.log("autoFocus is changed.....")
       // imperative code starts here
       if(autoFocus && ref.current ){
           ref.current.focus();
       }
       // imperative code ends here
   },[autoFocus])
   return (
       <div>
           <input type={type} value={text} ref={ref} onChange={handler}/>
           <label value={text}>{children}</label>

       </div>
   )
}


export default InputWithLabel;