import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

function Layout() {
  return <>
        <Nav />
        <Outlet></Outlet>
  </>
}export default Layout
