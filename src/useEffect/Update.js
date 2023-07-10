import React, { useEffect, useState } from 'react'

function Update() {
    const [A,setA]=useState(false)
    const [B,setB]=useState(false)

    useEffect(()=>{
        console.log("mount")
    },[A,B])
  return (
    <>
        <button onClick={()=>setA(!A)}>A</button>
        <button onClick={()=>setB(!B)}>B</button>
        <h3>A={String(A)} B={String(B)}</h3>
        
    </>
  )
}

export default Update