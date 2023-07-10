import { useState } from "react";

function StateObject(){

    const[obj,setObj]=useState({name:"Tejal", gender:"female" , age:15})
    const handleChange=()=>{
        setObj({...obj, ["name"]: "Shravani" , ["gender"]:"female" , age:13})
    }

    return(<div>
        
        
        <button onClick={handleChange}>Change</button>
        <h1>{obj.name}</h1>
        <h1>{obj.gender}</h1>
        <h1>{obj.age}</h1>
    </div>)
}
export default StateObject;