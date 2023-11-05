import React from 'react';

const NavMenu = ({ menuItems }) => {
  return (
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {menuItems.map((item) => (
          <li class="nav-item" key={item.id} >
            <a class="nav-link active" aria-current="page" href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
  );
};

export default NavMenu;