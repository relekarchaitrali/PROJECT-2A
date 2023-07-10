import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <Link to="/"> Home</Link>
        <Link to="/About"> About</Link>
        <Link to ="/Contact">Contact</Link>
        <Link to="/SignIn">SignIn</Link>
        <Link to="/Connect">Connect</Link>
        <Link to="Connect/Add">Add</Link>
        <Link to="Connect/Edit">Editt</Link>
    </>
  )
}

export default Navbar