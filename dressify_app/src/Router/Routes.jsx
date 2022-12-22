import { Route, Routes } from "react-router"
import Men from "../Pages/Men"
import Women from "../Pages/Women"
import Kids from "../Pages/Kids"
import Life from "../Pages/Life"
import Admin from "../Pages/Admin"
import WomenProducts from "../Pages/WomenProducts"
import MenProducts from "../Pages/MenProducts"
import Cart from "../Pages/Cart"
import SignUp from "../Components/SignUp"
import Login from "../Components/Login"

const Rout = () => {
  return <><Routes>
    <Route path="/" element={<Women/>}></Route>
    <Route path="/men" element={<Men/>}></Route>
    <Route path="/kids" element={<Kids/>}></Route>
    <Route path="/life" element={<Life/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/WomenProducts" element={<WomenProducts/>}></Route>
    <Route path="men/MenProducts" element={<MenProducts/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    {/* <Route path="MenProducts/Cart" element={<Cart/>}></Route> */}
    {/* <Route path="WomenProducts/Cart" element={<Cart/>}></Route> */}

  </Routes></>
}

export default Rout 