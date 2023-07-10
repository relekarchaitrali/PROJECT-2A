import React, { useReducer } from 'react'
import Reducer,{contextCounter,initialState} from './Reducer'
import CounterContext from './CounterContext'

function Main() {

    const[state,dispatch]=useReducer(Reducer,initialState)  //(2) hi srv file
  return (
    <div>
        <contextCounter.Provider value={{state,dispatch}}>
        <CounterContext/>
        </contextCounter.Provider>

    </div>
  )
}

export default Main