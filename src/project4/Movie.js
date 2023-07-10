import React, { useEffect } from 'react'

function Movie() {

   useEffect(()=>{
    try {
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=")
        .then((response)=>console.log(response.data.result)
        )
    } catch (error) {
        
    }
   },[])
s
  return (
    <div>Movie</div>
  )
}

export default Movie

