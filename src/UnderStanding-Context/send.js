import React, { createContext } from 'react'
import Recieve from './recieve'

export const user=createContext()
function Send() {

  const name="mayur"
  return (
    <div>
      <user.Provider value={name}>
      <Recieve/>
      </user.Provider>
    </div>
  )
}

export default Send