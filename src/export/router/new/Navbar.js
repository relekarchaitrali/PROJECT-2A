import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const Nav=[
        { path:"/", title:"Home"},
        { path:"/ContactUs",title:"ContactUs"},
        { path:"/ContactUs/Add",title:"Add"},
        { path:"/Product", title:"Product"}
    ]


  return (
    <>
        {Nav.map((d)=>{
            return <Link to={d.path}>{d.title}</Link>
        })}
    </>
  )
}

export default Navbar