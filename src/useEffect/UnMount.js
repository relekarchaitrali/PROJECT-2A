import React, { useEffect, useState } from 'react'

function UnMount() {
    const [count,setCount]=useState(0)

  return (
    <>
    {count<5 && <RenderUi count={count}/>}
    <button onClick={()=>setCount(count+1)}>Click</button>
    </>
  )
}

export default UnMount


//   function RenderUi({count}) {
//   return (
//    useEffect(()=>{
//     console.log("mount"+count)
//     return()=>{
//         console.log("unMount"+count)
//     }
//    },[])
//   )
// }


//updated
function RenderUi({count}) {
    return (
     useEffect(()=>{
      console.log("mount"+count)
      return()=>{
          console.log("unMount"+count)
      }
     },[count])
    )
  }