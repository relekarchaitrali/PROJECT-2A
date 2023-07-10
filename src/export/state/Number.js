import { useState } from "react"

function Number(){

    const[num,newSet]=useState(0);

    // const handleChange=()=>{newSet(8)}

    const decrement=()=>{newSet(num-1)}
    const increament=()=>{newSet((x)=>(x+1))}
    

return(<div>
<h1>{num}</h1>
{/* <button onClick={handleChange}>Change</button> */}

<button onClick={decrement}>-</button>
<button onClick={increament}>+</button>

</div>)
}
export default Number;