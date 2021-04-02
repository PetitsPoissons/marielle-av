// React imports
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { register } from '../../actions/auth';

const SignUp = () => {
  return (
    <div className="container" style={{ marginTop: '3rem' }}>
      <div className="row">
        <div className="col s6">
          <form>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">alternate_email</i>
                <input
                  name="email"
                  type="text"
                  id="email"
                  className="validate"
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
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light blue-grey darken-1"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col s6">
          <p>Or sign up using third-party services</p>
          <button className="btn waves-effect waves-light blue-grey darken-1">
            Facebook
          </button>
          <button className="btn waves-effect waves-light blue-grey darken-1">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
