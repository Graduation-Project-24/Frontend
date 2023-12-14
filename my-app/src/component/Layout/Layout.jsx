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

function Layout() {
  return <>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/profile" element={<Profile />}>
          <Route path="" element={<Account/>}></Route>
          <Route path="password" element={<Password/>}></Route>
        </Route>
      </Routes>
      <Footer />
  </>
}
export default Layout
