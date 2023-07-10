import { useFormik } from 'formik'
import React from 'react'

function FormikForm() {

  const formik=useFormik({
    initialValues:{
      username :"" ,
      email : "",
      password : ""
    },
    onSubmit:(values)=>{
      console.log(values)
    },
    validate:(values)=>{
      let errors={}
      if(!values.username){
        errors.username = "Required"

      }else if(values.username.length > 8){
        errors.username="Must be 8 characters or less"
      }



      if (!values.email) {

        errors.email="Required"

      } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){  //he test krt email mdlya values barobr ahet ka te.
        errors.email="Invalid Email"
      }

      if (!values.password) {
        errors.password="Required"
      
      }
      return errors

    }
  });

  
  return (
    <div className='container border border-1 mx-auto w-30 p-3'>
    <form onSubmit={formik.handleSubmit}>
      <div className='mb-3 w-50 mx-auto'>
        <label className='form-label'> UserName </label>
        <input type='text' onChange={formik.handleChange} value={formik.values.username} name='username' onBlur={formik.handleBlur} className='form-control'/>

        {formik.touched.username && formik.errors.username ? 
          <h3>{formik.errors.username}</h3>:null}
      </div>

      <div className='mb-3 w-50 mx-auto'>
        <label className='form-label'> Email </label>
        <input type='email' onChange={formik.handleChange} value={formik.values.email} name='email' onBlur={formik.handleBlur} className='form-control'/>

        {formik.touched.email && formik.errors.email ? 
          <h3>{formik.errors.email}</h3>:null}
      </div>

      <div className='mb-3 w-50 mx-auto'>
        <label className='form-label'> PassWord </label>
        <input type='password' onChange={formik.handleChange} value={formik.values.password} name='password' onBlur={formik.handleBlur} className='form-control'/>

        {formik.touched.password && formik.errors.password?
         <h3>{formik.errors.password}</h3>:null}
        
      </div>
      <div className="d-flex justify-content-center">
      <button className='btn btn-primary w-50' type='submit'>SUBMIT</button>
      </div>

      

        
    </form>
    </div>
  )
}

export default FormikForm ;