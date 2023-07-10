import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ContactUs from './ContactUs'
import Home from './Home'
import Product from './Product'
import Add from './Add'
import Error from './Error'
import ProductDashboard from './ProductDashboard'

function RoutingNew() {

    // method 1: ye hum follow nahi karenge

    // const router=createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <Home/>,

            
    //     },

    //     {
    //         path: "/ContactUs",
    //         element:<ContactUs/>,
    //         children:[ {
    //             path: "Add/",
    //             element: <Add/>
    //         }]
    //     },

    //     {
    //         path:"/Product",
    //         element:<Product/>
    //     }
    // ])


//method no :2 =>

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Home/>}>
            <Route path='ContactUs' element={<ContactUs/>}>
                <Route path='Add' element={<Add/>}/>
            </Route>
            <Route path='Product' element={<Product/>}>
                <Route index element={<ProductDashboard/>}/>
            </Route>
            <Route path='*' element={<Error/>}/> 

        </Route>
       
    )
)










  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default RoutingNew