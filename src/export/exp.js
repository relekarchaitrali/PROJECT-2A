import React from "react";

function Exp(){

    const x = 10;
    const y = 20;

    const string= "chaitrali";

    const tag=<h1>Hello world</h1>

    function greet(x){
        return (`hi ${x}`)
    }

    const url ="https://picsum.photos/seed/picsum/200/300"

    const Array =["item1","item2","item3"];

    const Mapped = Array.map((item)=> {
        return <li>{item}</li>
    })

    const styles={width:"250px",heigth:"150px", backgroundColor:"red"}
        
    

    return (<div>
        <div>{x+y}</div>
        <div>{string}</div>
        <div>{tag}</div>
        <div>{greet("Good Evening")}</div>
        <img src= {url}/>
        <div>
        <ol>
            {Array.map((item)=>{
                return <li>{item}</li>
            })}
           
        </ol>
        </div>

        <div>
            <ul>
                {Mapped}
            </ul>
        </div>

        <div style={{width:"250px",heigth:"150px", backgroundColor:"red"}}>
        </div>

        <div style={styles}></div>
        

    
    </div>)
}
export default Exp;