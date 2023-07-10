import Comp2 from "./Comp2"
function Comp1(){
    const name1='chaitrali';
    return(
        <div>
            <h1>Comp1</h1>
            <Comp2 name1={name1}/>
        </div>
    )
}
export default Comp1;