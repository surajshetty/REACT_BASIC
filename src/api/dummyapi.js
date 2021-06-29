function dummyAPI(){

    return new Promise((resolve)=>{
       
         setTimeout(()=>{
            console.log("timeout called ")
           resolve({data:[{name:"suraj","age":38,properties:{name:{type:"generic"}}},{name:"suresh",age:40,properties:{name:{type:"generic"}}},{name:"venki",age:45,properties:{name:{type:"generic"}}}]})
           
         },5000)
         //throw new Error('test')
    })
}
export default dummyAPI;