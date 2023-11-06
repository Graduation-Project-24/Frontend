import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Layout() {
  return <>
        <Nav />
        <Outlet></Outlet>
        <Footer />
  </>
}
export default Layout
