import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Edit from './pages/Edit/Edit';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/home' component={Home} />
        <Route path='/blog' component={Blog} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/edit' component={Edit} />
        <Route path='/:id' component={BlogDetails} />
        <Redirect from='/' to='/home'/>
      </Switch>
    </Router>
  );
}

export default App;
