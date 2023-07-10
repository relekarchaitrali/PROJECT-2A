import React, { useReducer} from 'react'
import './style.css'

function Reducer() {

    // const[count,setCount] = useState(0)
    // const[toggle,setToggle]= useState(false)
    //when we use 2 or more than 2 state then we should use reducer.

    const Reducer=(state,action)=>{
        switch (action.type) {
            case "Counter":
                return {...state,count : state.count+1}
            
            case "Toggler" :
                return {...state,toggle : !state.toggle}
                
            default:
                break;
        }
    }

    const [state, dispatch]=useReducer(Reducer,{

        count:0 ,
        toggle : false

    })

    

    
  return (
    <>
        <button onClick={()=>dispatch({type:"Counter"})}>+</button>
        <h2>{state.count}</h2>

        <hr/><hr/>
        <button onClick={()=>dispatch({type:"Toggler"})}>click</button>
        {state.toggle && <div className='toggle'></div> }

    </>

    
  )
}

export default Reducer