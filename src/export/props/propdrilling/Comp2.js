import Comp3,{name1} from "./Comp3"

function Comp2({name1}){
    return(<div><h1>Comp2</h1>
    <Comp3 name1={name1}/>
    </div>)
}
export default Comp2 ;