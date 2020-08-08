import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home/Home'

const App= () => (
  //added routes just for nav-experince
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/> 
    </Switch> 
  </BrowserRouter>
)

export default App;
