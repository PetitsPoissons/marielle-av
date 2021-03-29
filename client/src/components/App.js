// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions';

// Components
import Navbar from './layoutComponents/Navbar';
import Home from './pages/Home';

// Styles & Images

const Dashboard = () => <h2>Dashboard</h2>;
const RecipeNew = () => <h2>RecipeNew</h2>;

const App = ({ fetchUser }) => {
  // fecth user on loading the app
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
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
