import { Routers } from "./components/Routers";
import { Navbar } from "./components/NavBar"
import {Menu} from "./components/Menu"
const App = () =>{
  return <div>
<Navbar/>
<div class="row">
  <div class="col-mod-7 bg-dark">
<Menu/>
  </div>
  <div class="col-mod-7">
  <Routers/>
  </div>
</div>
         </div>
}

export default App;

// <Navbar/>
//<Routers/>