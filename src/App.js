import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Films from "./pages/Films";
import FilmDetails from "./pages/FilmDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/filmdetails/:id" component={FilmDetails}/>
          <Route exact path="/" component={Films} />
        </Switch>
    </Router>
  );
}

export default App;
