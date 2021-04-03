// React imports
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { register } from '../../actions/auth';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('formData', formData);
  };

  return (
    <div className="container" style={{ marginTop: '3rem' }}>
      <div className="row">
        <div className="col s6">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">person</i>
                <input
                  name="username"
                  type="text"
                  id="username"
                  className="validate"
                  value={formData.username}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="username">Username</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">alternate_email</i>
                <input
                  name="email"
                  type="text"
                  id="email"
                  className="validate"
                  value={formData.email}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="email">Email</label>
                <span
                  className="helper-text"
                  data-error="wrong"
                  data-success="right"
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
                  type="text"
                  id="password"
                  className="validate"
                  value={formData.password}
                  onChange={(e) => onChange(e)}
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
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
            <button className="btn waves-effect waves-blue-grey blue-grey darken-1 facebookBtn">
              Facebook
            </button>
            <button className="btn waves-effect waves-blue-grey blue-grey darken-1 googleBtn">
              Google
            </button>
          </div>
          <div className="row center-align">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
