import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Layout from "./component/Layout/Layout"
import Home from "./component/Home/Home"
import "./index.css";
import About from './component/About/About';

function App() { 

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