// React imports
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions';

// Components
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const RecipeNew = () => <h2>RecipeNew</h2>;
const Landing = () => <h2>Landing</h2>;

// Styles & Images

const App = ({ fetchUser }) => {
  // fecth user on loading the app
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing}></Route>
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
