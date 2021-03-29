import React, { useEffect } from 'react';
import M from 'materialize-css';

const Navbar = () => {
  useEffect(() => {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav, {});
  }, []);
  return (
    <div className="navbar-fixed">
      <nav className="no-shadows white">
        <div className="container">
          <a
            href="#"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
          >
            <i className="material-icons grey-text text-darken-4">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#" className="grey-text text-darken-4">
                Join In
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-wrapper">
          <h2 className="title grey-text text-darken-4 center">
            L'ASSIETTE VERTE
          </h2>
        </div>
      </nav>
      <ul id="slide-out" class="sidenav">
        <li>
          <a href="#!">
            <i class="material-icons">cloud</i>First Link With Icon
          </a>
        </li>
        <li>
          <a href="#!">Second Link</a>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <a class="subheader">Subheader</a>
        </li>
        <li>
          <a class="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
