import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Edit from './pages/Edit/Edit';
import NotMatch from './pages/NotMatch'

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Redirect exact from='/' to='/home'/>
        <Route path='/home' component={Home} />
        <Route path='/blog/:id' component={BlogDetails} />
        <Route path='/blog' component={Blog} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/edit' component={Edit} />
        <Route path='/404' component={NotMatch}/>
        <Route component={NotMatch}/>
      </Switch>
    </Router>
  );
}

export default App;
