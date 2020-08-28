import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
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
        <Route path='/projects' component={withRouter(Projects)} />
        <Route path='/skills' component={withRouter(Skills)} />
        <Route path='/contact' component={withRouter(Contact)} />
        <Route exact path='/' component={withRouter(Home)} />
        <Route component={withRouter(Home)} />
      </Switch>
    </Layout>
  </Router>

);

export default App;
