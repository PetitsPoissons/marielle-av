import React from 'react';
import { ForkKnife, Nav, NavIcon, NavLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">L'Assiette Verte</NavLink>
        <NavIcon>
          <p>Menu</p>
          <ForkKnife />
        </NavIcon>
      </Nav>
    </>
  );
};
export default Navbar;
