import { Outlet} from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import ChatBot from '../ChatBot/ChatBot'

function Layout() {
  return <>
      <Nav /> 
        <Outlet />
      <Footer />
      <ChatBot />
  </>
}
export default Layout
