import React, { useState} from "react";
function UseState(){

    const [name,setName]=useState("chaitrali")

    const handleClick =()=>
    {setName("Mayur")
    console.log(name);
}


    return(
        <div>
            <h1>{name}</h1>
            <button onClick={handleClick}>Change Name</button>
        </div>
    )
}
export default UseState;