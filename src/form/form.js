import React, { useState } from 'react';

function Form(){


    const [formData, setformData]=useState({
        username:"",
        email:"",
        password:""
    })

    const [data, setData]=useState([])

    const handleChange=(e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        setformData((prev)=>({...prev,[e.target.name]:e.target.value}))
        // alert(JSON.stringify(formData))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setData([...data,formData])

    }
    return (
      
        <>
        <form onSubmit={handleSubmit}>
            <label> USERNAME :
                <input name='username'  value={formData.username}type='text' onChange={handleChange}/>
            </label>
            <br/>

            <label> EMAIL :
                <input name='email'  value={formData.email}type='email' onChange={handleChange}/>
            </label>
            <br/>
        

            <label> PASSWORD :
                <input name='password'  value={formData.password} type='password' onChange={handleChange}/>
            </label>
            <br/>

            <button type='submit'>SUBMIT</button>
            
            
        </form>
        <div>
            {data.map((item,i)=>{
                return<ul key={i}>
                    <li>{item.username}</li>
                    <li>{item.email}</li>
                    <li>{item.password}</li>

                </ul>
                

            })}
        </div>
        </>
            
    
    );
}

export default Form;
