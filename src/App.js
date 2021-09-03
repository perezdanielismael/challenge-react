import React from 'react'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ActivoProvider from './components/context/ActivoProvider';
import Home from './components/Home';

function App() {
  return (
    <ActivoProvider>
      <Router>
        <Switch>
          <Route path='/home' exact>
            <Home/>
          </Route>
          <Route path='/' exact>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </ActivoProvider>
  );
}

export default App;
