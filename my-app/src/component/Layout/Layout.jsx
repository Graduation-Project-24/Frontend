import { Route, Routes } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import About from '../../Pages/About/About'
import Home from "../../Pages/Home/Home"
import User from '../../Pages/User/User'
import Contact from '../../Pages/Contact/Contact'
import Shop from '../../Pages/Shop/Shop'
import Profile from '../../Pages/Profile/Profile'
import Password from '../../Pages/Profile/Password'
import Account from '../../Pages/Profile/Account'
import ForgetPassword from '../../Pages/Confirmations/ForgetPassword'
import ConfirmPassword from '../../Pages/Confirmations/ConfirmPassword'
import Register from '../../Pages/User/Register/Register'

function Layout() {
  return <>
      <Nav /> 
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
        <Route path="/confirmpassword" element={<ConfirmPassword/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/*" element={<Profile />}>
          <Route path="" element={<Account/>}></Route>
          <Route path="password" element={<Password/>}></Route>  
        </Route>
      </Routes>
      <Footer />
  </>
}
export default Layout
