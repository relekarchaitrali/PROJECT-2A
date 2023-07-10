import React, { useContext } from 'react'
import { user } from './send'


function Recieve() {

  const use = useContext(user)
  return (
    <div>recieve
      {use}
    </div>
  )
}

export default Recieve