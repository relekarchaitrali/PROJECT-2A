import React, { useEffect, useState } from 'react'

function ApiFetch() {

    const [data,setData] = useState(null)


    const getData= async()=>{
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setData(data)
            


        }catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{     //output reapeted yeu naye mhnun useEffect use kela.
        getData()
    },[])
    
  return (
    <>
    </>
  )
}

export default ApiFetch