// React imports
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp, oauthFacebook, oauthGoogle } from '../../actions/authActions';

const SignUp = ({
  signUp,
  oauthFacebook,
  oauthGoogle,
  auth: { isAuthenticated, errorMessage },
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signUp(formData);
    if (!errorMessage) {
      return <Redirect to="/" />;
    }
  };

  const responseFacebook = (res) => {
    console.log('responseFacebook', res);
    oauthFacebook(res.accessToken);
    if (!errorMessage) {
      return <Redirect to="/" />;
    }
  };

  const responseGoogle = (res) => {
    console.log('responseGoogle', res.accessToken);
    oauthGoogle(res.accessToken);
    if (!errorMessage) {
      return <Redirect to="/" />;
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container" style={{ marginTop: '3rem' }}>
      <div className="row">
        <div className="col s6">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">alternate_email</i>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="validate"
                  value={formData.email}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-error="wrong!"
                  data-success="right!"
                >
                  Please enter a valid email
                </span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">password</i>
                <input
                  name="password"
                  type="password"
                  id="password"
                  className="validate"
                  value={formData.password}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            {errorMessage ? (
              <div className="alert amber darken-2">{errorMessage}</div>
            ) : null}
            <button
              className="btn waves-effect waves-blue-grey blue-grey darken-1"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col s6">
          <div className="row center-align altAuthTxt">
            ... or sign up using third-party services:
          </div>
          <div className="row center-align">
            <FacebookLogin
              appId="193812862502963"
              autoLoad={true}
              textButton="facebook"
              fields="name, email, picture"
              callback={responseFacebook}
              // cssClass="btn waves-effect waves-light blue-grey darken-1"
            />
            <GoogleLogin
              clientId="548905286673-hff0ad9f10lv2hticec1cosgm6ph005k.apps.googleusercontent.com"
              buttonText="Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="waves-effect waves-light"
            />
          </div>
          <div className="row center-align">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
  oauthFacebook: PropTypes.func.isRequired,
  oauthGoogle: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signUp, oauthFacebook, oauthGoogle })(
  SignUp
);
