import React from 'react';
import Home from './views/Home';
import CareTakersView from './views/caretakers/ViewCare';
import NewUser from './views/person/AddPerson';
import Agenda from './components/Agendar';
import EditProfile from './views/person/EditProfile';
import P404 from './views/P404';
import HomeUsuario from './views/HomeUsuario';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/user">
          <HomeUsuario></HomeUsuario>
        </Route>
        <Route exact path="/caretakers/view/:id">
          <CareTakersView></CareTakersView>
        </Route>
        <Route exact path="/persons/signup">
          <NewUser></NewUser>
        </Route>
        <Route exact path="/agendar/add">
          <Agenda></Agenda>
        </Route>
        <Route exact path="/caretakers/view/:id/edit">
          <EditProfile></EditProfile>
        </Route>
        <Route exact path="*">
          <P404></P404>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
