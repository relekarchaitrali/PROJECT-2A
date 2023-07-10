import React, { useContext } from 'react'
import {FormData} from './Form'

function Level3() {

  const Forme= useContext(FormData)
  console.log("level3", Forme);

  return (
      <>
          <h1>Level3</h1>
          {Forme.map((user) => {
              return <>
                  <h3>{user.name}</h3>
                  <h3>{user.age}</h3>
              </>
          })}
      </>
  )
}

export default Level3