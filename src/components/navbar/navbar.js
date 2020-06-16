import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Button from 'react-bootstrap/button';
import { translate } from "react-i18next";

import './navbar.css';
import '../../global.css';

const Navbar = (props) => {
  return (
    <div className="navbar__container">
    <div className="navbar__links">
    <img 
      src="/assets/logo7.png"
      alt="Organization Logo"
      className="logo-md"
    />
    <Router>
      <Link to="/beetroots/" tabIndex='1'>Beetroots</Link>
      <Link to="/horseraddish/" tabIndex='2'>Horseraddish</Link>
      <Link to="/sea-lettuce/" tabIndex='3'>Sea lettuce</Link>
      <Switch>
        <Route path='/beetroots' />
        <Route path='/horseraddish' />
        <Route path='/sea-lettuce' />
      </Switch>
    </Router>
    </div>
    <div className="navbar__button">
      <Button variant="success" tabIndex='4'>{ props.t('startBuilding', { framework: "react-i18next" }) }</Button>
    </div>
  </div>);
}


export default translate('common')(Navbar);
