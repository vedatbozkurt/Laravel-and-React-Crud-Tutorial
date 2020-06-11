import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'
import List from './components/List'
import Add from './components/Add'
import Edit from './components/Edit'
import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={List}/>
          <Route path="/add" component={Add}/>
          <Route path="/edit/:id" component={Edit} />
          <Route component={ NotFound } />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
