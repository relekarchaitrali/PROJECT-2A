import React, { useRef} from 'react'

function UseRef4() {
    //useState
    // const [count,setCount]=useState(0)

    // const handleClick = ()=>{
    //     setCount(count+1)
    // }

    //useRef
    const [CountRef]=useRef(0)

    const handleClick=()=>{
        CountRef.current +=1
    }

  return (
    <div>
        <button onClick={handleClick}>Click</button>
    
    </div>
  )
}

export default UseRef4





