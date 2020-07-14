import React from 'react';
import Home from './views/Home';
import CareTakersView from './views/caretakers/ViewCare';
import CareTakersindex from './views/caretakers/IndexCare';
import AddPerson from './views/person/AddPerson';
import Agenda from './components/Agendar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/caretakers/view">
          <CareTakersView></CareTakersView>
        </Route>
        <Route exact path="/persons/add">
          <AddPerson></AddPerson>
        </Route>
        <Route exact path="/agendar/add">
          <Agenda></Agenda>
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
