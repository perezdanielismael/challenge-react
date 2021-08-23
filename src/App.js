import React from 'react'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Admin from './components/Admin';
import ActivoProvider from './components/context/ActivoProvider';
function App() {
  return (

    <ActivoProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/admin' exact>
            <Admin/>
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
