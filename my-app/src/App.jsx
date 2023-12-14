import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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

function App() { 

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  let routers = createBrowserRouter([
    {path:'', element :<Layout />, children:[
      {path:'home', element:<Home />},
      {path:'about', element:<About />},
      {path:'contact', element:<Contact />},
      {path:'shop', element:<Shop />},
      {path:'profile', element:<Profile />, children:[
        {path:'', element:<Account/>},
        {path:'password', element:<Password/>}
      ]},
    ]},
    {path:'user', element:<User />},
  ])

  return (
    <>  
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;