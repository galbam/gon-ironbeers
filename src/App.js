import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import { Route, Switch } from "react-router-dom";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Beers from "./components/Beers";
import BeerDetail from "./components/BeerDetail";
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/beer/:beerId" component={BeerDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
