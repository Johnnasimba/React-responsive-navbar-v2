import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Navbar from '../components/navbar/navbar.component';
import Home from '../pages/home';
import KeyFeature from '../pages/key-feature';
import Pricing from '../pages/pricing';
import Testimonials from '../pages/testimonials';
import Demo from '../pages/demo';


import './App.css';

function App() {
  return (
    <div className="container">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/features" component={KeyFeature} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/testimonials" component={Testimonials} />
            <Route path="/demo" component={Demo} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>

    </div>
  );
}

export default App;
