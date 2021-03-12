import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ auth }) => {
  console.log(auth);
  return (
    <nav className="teal accent-3">
      <div className="nav-wrapper">
        <a className="left brand-logo">L'Assiette Verte</a>
        <ul className="right">
          <li>
            <a>Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

// bring in the auth state
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
