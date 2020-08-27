import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Projects from '../containers/Projects';
import Skills from '../containers/Skills';
import Contact from '../containers/Contact';
import '../assets/styles/App.scss';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path='/projects' component={Projects} />
        <Route path='/skills' component={Skills} />
        <Route path='/contact' component={Contact} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Layout>
  </Router>

);

export default App;
