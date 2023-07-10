import Contact from "./contact"  // default export.
import {Com,Com1} from "./contact"  //name export should write in{}
import Exp from "./exp";

function Main(){
    return(<div>
        <Contact/>
        <Com/>
        <Com1/>
        <Exp/>
    </div>)
}
export default Main;