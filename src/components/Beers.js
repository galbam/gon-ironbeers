import React, { Component } from 'react';
// import Header from './Header';
import axios from "axios";
import Beer from './Beer';

class Beers extends Component {

     state = {
          beers: []
     };

     componentDidMount() {
          axios
               .get("https://ih-beer-api.herokuapp.com/beers")
               .then(response => {

                    this.setState({
                         beers: response.data.slice(0, 10).filter(x => x._id)
                    });
               })
               .catch(err => {
                    console.log(err);
               });
     }

     render() {

          const beerList = this.state.beers.map((b) => {
               return (
                    <Beer key={b._id} beer={b} />
               );
          });

          return (
               <div>
                    {/* <Header/> */}
                    <h1>Beers</h1>
                    {beerList}
               </div>
          )
     }
}

export default Beers;
