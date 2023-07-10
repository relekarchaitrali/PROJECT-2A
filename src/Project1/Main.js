import {Data} from "./Data"
import "./style.css"

function Project1(){
    console.log(Data);
    return(
       
        <div className="product-container">
            {Data.map((item,i)=>{
                return (
                    <>
                        <div className="product-card">
                        <img src= {item.thumbnail} width={'200px'} height={'150px'}/>
                         <h4>{item.title}</h4>
                         <p>Price: ${item.price}</p>
                         <p>Rating: {item.rating}5</p>
                         
                         
                    
                 </div></>
                )                
            
            })}
        </div>
    )
        }
    
export default Project1;