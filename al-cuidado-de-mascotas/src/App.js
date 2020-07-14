import React from 'react';
import Home from './views/Home';
import P404 from './views/P404';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        
        <Route path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
