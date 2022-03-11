import { Routes,Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import {Certificates} from './Certificates'
export const Routers = () => {
    return <div>
   <BrowserRouter>
   <Routes>
        <Route path="/Certi" element={<Certificates/>}/>
    </Routes>
   </BrowserRouter>
</div>
}