import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ComponentdidMounting() {
//     useEffect(()=>{
//         console.log("component Mount")
//     },[])       
//   return (
    
          
//         <div>ComponentdidMounting</div>  //2 vela output yenar karn react 18.new version have concurrency mode. old version 16.8 showed oneoutput.

//   )



//axios
const [data,setData]=useState([])

const getData= async()=>{

  
    console.log(data);

        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        
        return(response.data)
        
}
useEffect(()=>{    
    
    let flag= false                        //output reapeted yeu naye mhnun useEffect use kela.
    getData()
    .then((res)=>{
        if(!flag){setData(res)
            console.log("mounted")}
        
    })

    return()=>{
        flag = true
    }
},[])


return(

    <>
        {data.map((data)=>{
            return<h2>{data.name}</h2>})}
    
    
    </>
)
 }

export default ComponentdidMounting