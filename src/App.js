import { Navbar } from "./components/NavBar"
import { Menu } from "./components/Menu";
const App = () =>{
  return <div>
         <Navbar/>
         <div class="row">
         <div class="col-mod-3">
         <Menu/>  
         </div>
         </div>
  </div>
}

export default App;
/*import { useState } from "react";

const App = () => {
  const [img,setimg]=useState("")
 return <div>
   pls upload ur img <br/>
   <input type="file" onChange={(e)=>setimg(URL.createObjectURL(e.target.files[0]))}/><br/>
   <button onClick={()=>console.log(img.name )}>Submit</button> 
 </div>
};

export default App;*/