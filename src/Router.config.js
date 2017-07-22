import React from 'react';
import {Router, Route, hashHistory, IndexRoute, Redirect} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Fashion from './components/Fashion';
import Styles from './components/Styles';
import Contact from './components/Contact';
import Error from './components/Error';


const RouterConfig = ()=>(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="home" component={Home}>
        <Route path=":aid" component={Home}/>
      </Route>
      <Route path="about" component={About}/>
      <Route path="fashion" component={Fashion}/>
      <Route path="styles" component={Styles}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={Error}/>
    </Route>
  </Router>
);
export default RouterConfig;