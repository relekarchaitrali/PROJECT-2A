import React, { createContext } from 'react'


export const contextCounter=createContext()  //(1)

export const initialState={    //(3)
    count:0
}


    const Reducer = (state, action) => {

        switch (action.type) {
    
            case "INCREMENT":
                return { ...state, count: state.count + 1 }
    
            case "DECREMENT":
                return { ...state, count: state.count - 1 }
    
            default:
                return state;
        }
    
  
}

export default Reducer