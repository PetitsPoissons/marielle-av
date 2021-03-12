import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const RecipeNew = () => <h2>RecipeNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = ({ fetchUser }) => {
  // fecth user on loading the app
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route path="/recipes/new" component={RecipeNew}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(null, { fetchUser })(App);
