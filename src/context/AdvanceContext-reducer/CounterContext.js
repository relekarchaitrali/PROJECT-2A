import React, { useContext } from 'react'
import { contextCounter } from './Reducer'

function CounterContext() {    //this page create last
    const{state , dispatch}=useContext(contextCounter)

  return (
    <div>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
            <span> count{state.count}</span>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </div>
  )
}

export default CounterContext