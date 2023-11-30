import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from "./component/Layout/Layout"
import Home from "./Pages/Home/Home.jsx"
import About from './Pages/About/About.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
// css file
import "./index.css";

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
    ]}
  ])

  return (
    <>  
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;