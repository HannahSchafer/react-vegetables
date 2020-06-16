import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { HashRouter } from 'react-router-dom'
import DisplayCards from './components/display-cards/display-cards.js';
import Footer from './components/footer/footer.js';
import Hero from './components/hero/hero.js';
import MobileNavbar from './components/mobile-navbar/mobile-navbar.js';
import Navbar from './components/navbar/navbar.js';

import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>This is the Landing Page</title>
          <meta name="description" content="Insert description content for Organization to increase accessibility and rank highly on SEO" />
        </Helmet>
        <HashRouter>
          <Navbar />
          <MobileNavbar />
          <Hero />
          <div className="card-container">
            <DisplayCards />
          </div>
          <Footer />
        </HashRouter>
      </div>
    );
  }
}

export default App;
