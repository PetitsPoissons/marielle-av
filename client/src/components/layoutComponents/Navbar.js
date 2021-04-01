// React imports
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Style & Images
import M from 'materialize-css';

const Navbar = () => {
  useEffect(() => {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  }, []);
  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          <Link href="#!">
            <i className="material-icons">help_outline</i>Why vegan?
          </Link>
        </li>
        <li>
          <Link href="#!">
            <i className="material-icons">menu_book</i>Recipes
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link href="#!">
            <i className="material-icons">how_to_reg</i>Sign Up
          </Link>
        </li>
        <li>
          <Link href="#!">
            <i className="material-icons">login</i>Sign In
          </Link>
        </li>
        <li>
          <Link href="#!">
            <i className="material-icons">logout</i>Sign Out
          </Link>
        </li>
      </ul>
      <div className="navbar-fixed">
        <nav className="no-shadows white">
          <div className="container">
            <Link
              href="#"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i
                className="material-icons grey-text text-darken-4"
                id="hamburger-menu"
              >
                menu
              </i>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link href="#" className="grey-text text-darken-4">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="#" className="grey-text text-darken-4">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="#" className="grey-text text-darken-4">
                  Sign Out
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-wrapper">
            <h2 className="large grey-text text-darken-4 center" id="av-title">
              L'ASSIETTE VERTE
            </h2>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
