import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "./component/Layout/Layout"
import Home from "./Pages/Home/Home.jsx"
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
// css file
import "./index.css";
import User from './Pages/User/User.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Account from './Pages/Profile/Account.jsx';
import Password from './Pages/Profile/Password.jsx';
import ForgetPassword from './Pages/Confirmations/ForgetPassword.jsx';
import ConfirmPassword from './Pages/Confirmations/ConfirmPassword.jsx';
import Register from './Pages/User/Register/Register.jsx';
import Product from './Pages/Shop/Product.jsx';
import Cart from './Pages/Cart/Cart.jsx';


function App() { 

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          
          <Route path="shop">
            <Route index element={<Shop />} ></Route>
            <Route path=":id" element={<Product />}></Route>    
          </Route>
          
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Account/>}></Route>
            <Route path="password" element={<Password/>}></Route>  
            <Route path="orders" element={<Password/>}></Route>  
            <Route path="favorite" element={<Password/>}></Route>  
          </Route>
          
          <Route path="/forgetpassword" element={<ForgetPassword/>}></Route>
          <Route path="/confirmpassword" element={<ConfirmPassword/>}></Route>
        </Route>

        <Route path="user" element={<User />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;