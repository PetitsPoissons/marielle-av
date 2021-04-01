// React imports
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Redux imports
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { register } from '../../actions/auth';

const SignUp = () => {
  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <i class="material-icons prefix">alternate_email</i>
            <input type="email" id="email" className="validate" />
            <label htmlFor="email">Email</label>
            <span
              className="helper-text"
              data-error="wrong"
              data-success="right"
            >
              Helper text
            </span>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <i class="material-icons prefix">password</i>
            <input type="password" id="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button
          class="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
