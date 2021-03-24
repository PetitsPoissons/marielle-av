// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Styles & Images
import { Col, Icon, Row, SideNav, SideNavItem } from 'react-materialize';

const Header = ({ auth }) => {
  return (
    <Row className="white row4header">
      <Col s={2} className="center-align">
        <SideNav
          id="SideNav-10"
          options={{
            draggable: true,
          }}
          trigger={<Icon className="black-text">menu</Icon>}
        >
          <SideNavItem divider />
          <SideNavItem href="/" waves>
            Home
          </SideNavItem>
          <SideNavItem href="/recipes" waves>
            Recipes
          </SideNavItem>
          <SideNavItem href="/veganism" waves>
            Why Vegan?
          </SideNavItem>
          <SideNavItem href="/auth" waves>
            Join In
          </SideNavItem>
        </SideNav>
      </Col>
      <Col s={8} className="center-align">
        <Link to="/" className="brand-av">
          L'Assiette Verte
        </Link>
      </Col>
      <Col s={2} className="center-align">
        <Link to="/">Join In!</Link>
      </Col>
    </Row>
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
