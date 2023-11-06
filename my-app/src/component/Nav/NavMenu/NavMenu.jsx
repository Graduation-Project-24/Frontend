import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({ menuItems }) => {
  return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.id} >
            <Link className="nav-link text-white" aria-current="page" to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
  );
};

export default NavMenu;