/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../assets/logo.jpg'
import './Nav.css'

import NavMenu from './NavMenu/NavMenu';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Nav() {

  const menuItems = [
    { id: 1, label: 'Home', link: '/home' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Shop', link: '/shop' },
    { id: 4, label: 'Contact Us', link: '/contact' },
    { id: 5, label: 'Login', link: '/login' },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container">
          <Link className="navbar-brand logo p-0" to="home">
            <img src={Logo} alt="logo" />
          </Link>
          <form className="d-flex" role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <div className="dropdown m-0">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Categories test
                </button>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item" type="button">Action</button></li>
                  <li><button className="dropdown-item" type="button">Another action</button></li>
                  <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
              </div>
            <button className="btn btn-outline-success" type="submit">
              <AiOutlineSearch />
            </button>
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse m-0" id="navbarSupportedContent">
          <div>
            <NavMenu menuItems={menuItems} />
          </div>
          </div>
          <button className="btn btn-warning" type="submit"><BsFillCartFill /></button>
        </div>
      </nav>
    </>
  )
}
export default Nav
