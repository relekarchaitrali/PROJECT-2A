import React, { useState } from 'react'
import classes from './style.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

 
function Section() {
    const [input,setInput]=useState({
        Header:'',
        Details:''
    })

    const[data,setData]=useState([])

    const handleChange=(e)=>{
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setData([...data,input])
        console.log(data)
    }
  return (
    <div className={classes.Form} >
         <div className={classes.Header}>
        <form onSubmit={handleSubmit}>
            
                <div>
                <h3>Add Section</h3>
                    <label for="text">Section Header</label>
                    <input type="text"  id="text" class="form-control" onChange={handleChange} value={input.Header} name='Header'/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Section Details</label>
                    <textarea  class="form-control" id="exampleInputPassword1"  onChange={handleChange} value={input.Details} name='Details'/>
                </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
        </form>

        </div> 
        <div className={classes.formDetail}> 
        {data.map((info)=>{
            return(
                <Box> <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header" style={{border:'1px solid grey' , width:'500px' , }}
                        >
                        <Typography style={{fontSize:'20px'}}>{info.Header}</Typography>
                        </AccordionSummary>
                        <AccordionDetails style={{border:'1px solid grey' , width:'500px' , }}>
                        <Typography>
                            {info.Details}
                        </Typography>
                        </AccordionDetails>
                        </Accordion>
      
                </Box> 
            )
         })}
      

        </div>
         
    </div>
  )
}

export default Section