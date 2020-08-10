import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import reducer from './redux/reducer'

import Home from './Pages/Home/Home'
import Download from './Pages/Download/Download'

const store=createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

const routes= (
  <BrowserRouter>
    <Switch>
      <Route exact path={['/','/home']} component={Home}/>
      <Route path='/download' component={Download}/> 
    </Switch> 
</BrowserRouter>
)

const App= () => (
  <Provider store={store}>
    {routes}
  </Provider>
)

export default App;
