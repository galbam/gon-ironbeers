import React, { Component } from 'react';
// import Header from './Header';
import axios from "axios";
import Beer from './Beer';

class RandomBeer extends Component {
     state = {
          beer: {}
     };

     componentDidMount() {
          axios
               .get("https://ih-beer-api.herokuapp.com/beers/random")
               .then(response => {

                    this.setState({
                         beer: response.data
                    });
               })
               .catch(err => {
                    console.log(err);
               });
     }

     render() {

          const beer = this.state.beer;

          return (
               <div>
                    {/* <Header /> */}
                    <h1>Random Beer</h1>
                    {<Beer beer={beer} />}
               </div>
          )
     }
}

export default RandomBeer;
