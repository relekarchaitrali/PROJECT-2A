import { useState } from "react";



function Condition(){

    const[toggle, setToggle]=useState(true)

    const abc={
        height: "25vh",
        width:"25vw",
        backgroundColor:"red"
    }
    console.log(toggle);
    const handleChange=()=>{setToggle(!toggle)}
    
    return(<div>
        <button onClick={handleChange}>{toggle ? "Hide":"show"}</button>
        {toggle && <div style={abc}></div>}


    </div>
    
    )
}
export default Condition;