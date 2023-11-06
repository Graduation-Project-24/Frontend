/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../assets/logo.jpg'
import './Nav.css'

import NavMenu from '../component/NavMenu';
function Nav() {

  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Shop', link: '/shop' },
    { id: 4, label: 'Contact Us', link: '/contact' },
    { id: 5, label: 'Login', link: '/login' },
  ];

  return (
    <>
      <nav class="navbar navbar-expand-lg p-0">
        <div class="container">
          <a class="navbar-brand logo p-0" href="#">
            <img src={Logo} alt="logo" />
          </a>
          <form class="d-flex" role="search">
              <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
              <div class="dropdown m-0">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Categories test
                </button>
                <ul class="dropdown-menu">
                  <li><button class="dropdown-item" type="button">Action</button></li>
                  <li><button class="dropdown-item" type="button">Another action</button></li>
                  <li><button class="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
            <button class="btn btn-outline-success" type="submit">
            
            </button>
          </form>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse m-0" id="navbarSupportedContent">
          <div>
            <NavMenu menuItems={menuItems} />
          </div>
          </div>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </nav>
    </>
  )
}
export default Nav
