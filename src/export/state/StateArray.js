import { useState } from "react";

function StateArray(){

    const[list,setList] = useState([1])
    const handleUpdate=()=>{setList([...list,list.length + 1])}


    return(<div><button onClick={handleUpdate}>update</button>
    <h1>{String(list)}</h1>
    <ul>
        {list.map((n) =>{return <li>{n}</li>})}
    </ul>

    </div>)
}
export default StateArray;