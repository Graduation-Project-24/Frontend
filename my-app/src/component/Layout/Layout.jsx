import { Route, Routes } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import About from '../../Pages/About/About'
import Home from "../../Pages/Home/Home"

function Layout() {
  return <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
  </>
}
export default Layout
