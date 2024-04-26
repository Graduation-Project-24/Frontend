import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink}from "react-router-dom"
import { jwtDecode } from "jwt-decode";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../assets/whitelogo.png'
import './Nav.css'

import { AiOutlineSearch } from 'react-icons/ai';
import { FaCartArrowDown } from "react-icons/fa";

function Navigation() {

  var token = localStorage.getItem('userToken', token)
  var decode = jwtDecode(token)

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "orange"
  }

  return (
    <>
    
      <Navbar expand="lg" className="nav">
        <Container fluid className='justifycontent-between'>
          <Navbar.Brand href="#">
            <Link className="logo" to='./' data-aos="fade-right">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Form className="d-flex" data-aos="fade-right">
            <Form.Control
              type="search"
              placeholder="Search"
              className="form-control text-black-50"
              aria-label="Search"
            />
            <NavDropdown
              title="Category"
              id={`offcanvasNavbarDropdown-expand-lg`}
              className='bg-white dropdown me-1 text-black-50'
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <Button className='bg-orange text-white'><AiOutlineSearch /></Button>
          </Form>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className='orange' data-aos="fade-left" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="primary-color"
          >
            <Offcanvas.Header closeButton >
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className='orange'>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3" data-aos="fade-left">
                <NavLink 
                  to="/"
                  style={({isActive}) => isActive ? activeStyle : null }
                  className="nav-link"
                >
                  Home
                </NavLink>
                
                <NavLink 
                  to="/about"
                  style={({isActive}) => isActive ? activeStyle : null }
                  className="nav-link"
                >
                  About
                </NavLink>
                
                <NavLink 
                  to="/shop"
                  style={({isActive}) => isActive ? activeStyle : null }
                  className="nav-link"
                >
                  Shop
                </NavLink>
                <NavLink 
                  to="/contact"
                  style={({isActive}) => isActive ? activeStyle : null }
                  className="nav-link"
                >
                  Contact
                </NavLink>
                <NavLink 
                  to="/cart"
                  style={({isActive}) => isActive ? activeStyle : null }
                  className="nav-link"
                >
                  <FaCartArrowDown className='me-1' />
                  Cart 
                </NavLink>
              </Nav>
              {
            decode ?
            <Link className="profile-icon" to='./profile' data-aos="fade-left"><img src={decode.imageUrl} alt="Profile" /></Link> :
            <Link className='btn login bg-orange text-white' data-aos="fade-left" to='/user'>Login</Link>
          }
            </Offcanvas.Body>
            
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  </>
  );
}

export default Navigation;