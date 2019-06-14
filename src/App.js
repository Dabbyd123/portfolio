import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//Pages
import Home from './pages/home';
import Projects from './pages/projects';
import AboutMe from './pages/AboutMe/aboutme';
import Contact from './pages/contact';
import PageNotFound from './pages/404';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/aboutme" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
