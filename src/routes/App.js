import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import Projects from '../containers/Projects';
import Skills from '../containers/Skills';
import Contact from '../containers/Contact';
import '../assets/styles/App.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Layout>
  </BrowserRouter>

);

export default App;
