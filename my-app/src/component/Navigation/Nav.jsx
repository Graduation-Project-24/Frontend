/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from '../../assets/logo.jpg'
import './Nav.css'
function Nav() {
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
                  All Categories
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Login</a>
              </li>
            </ul>
          </div>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
      </nav>
    </>
  )
}
export default Nav
