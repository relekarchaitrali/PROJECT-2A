import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Navbar from './Navbar'
import Contact from './Contact'
import About from './About'
import SignIn from './SignIn'
import "./OldStyle.css"
import Connect from './Connect'
import Add from './Add'
import Edit from './Edit'



function routeold() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/Connect' element={<Connect/>}>

               <Route path='Add' element={<Add/>}/>
               <Route path='Edit' element={<Edit/>}/>

        </Route>
        </Routes>
    
        
          
    
    </Router>
    </>
  )
}

export default routeold



