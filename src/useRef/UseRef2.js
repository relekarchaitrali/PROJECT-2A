import React, { useRef } from 'react'

function UseRef2() {

    const focusRef=useRef()

    const handleChange = ()=>{
        focusRef.current.focus()
    }
  return (
    <>
    <input/>
    <input/>
    <input ref={focusRef}/>
    <input/>
    <button onClick={handleChange}> Click</button>
    </>
    )
}

export default UseRef2