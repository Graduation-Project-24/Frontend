import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
}from "react-router-dom"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../../assets/whitelogo.png'
import Profile from '../../assets/profile.svg'
import './Nav.css'

import { AiOutlineSearch } from 'react-icons/ai';

function Example(args) {

  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Shop', link: '/shop' },
    { id: 4, label: 'Contact', link: '/contact' }
  ];

  let Loging = true;

  return (
    <>
    
      <Navbar expand="lg" className="nav">
        <Container fluid className='justifycontent-between'>
          <Navbar.Brand href="#">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
          </Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="form-control"
              aria-label="Search"
            />
            <NavDropdown
              title="Dropdown"
              id={`offcanvasNavbarDropdown-expand-lg`}
              className='bg-white dropdown me-1 text-black'
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            </NavDropdown>
            <Button className='btn-disabled-color bg-orange text-white'><AiOutlineSearch /></Button>
          </Form>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} className='orange' />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="primary-color"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`} className='orange'>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {menuItems.map((item) =>
                <Nav.Link className='text-white' as={Link} to={item.link}>{item.label}</Nav.Link>)}
              </Nav>
              {
            Loging === true ?
            <a className="profile-icon" href='#'><img src={Profile} alt="Profile" /></a> :
            <button className='btn login'>Login</button>
          }
            </Offcanvas.Body>
            
          </Navbar.Offcanvas>
          
        </Container>
      </Navbar>
  </>
  );
}

export default Example;