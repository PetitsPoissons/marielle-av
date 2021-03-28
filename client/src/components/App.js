// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions';

// Components
import Navbar from './layoutComponents/Navbar';
import Hero from './layoutComponents/Hero';

// Styles & Images
import { GlobalStyle } from './globalStyles';

const Dashboard = () => <h2>Dashboard</h2>;
const RecipeNew = () => <h2>RecipeNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = ({ fetchUser }) => {
  // fecth user on loading the app
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <div>
        <Hero />
        <Route exact path="/landing" component={Landing}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/recipes/new" component={RecipeNew}></Route>
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
};

export default connect(null, { fetchUser })(App);
