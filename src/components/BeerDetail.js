import React, { Component } from 'react'
import axios from "axios";

class BeerDetail extends Component {

     state = {
          beer: {}
     };

     componentDidMount() {

          const beerId = this.props.match.params.beerId;

          axios
               .get("https://ih-beer-api.herokuapp.com/beers/" + beerId)
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
                    <div className="container d-flex justify-content-center">
                         <div className="row m-5">
                              <div className="col-2">
                                   <div className="d-flex justify-content-center">
                                        <img style={{height: "10rem"}} src={beer.image_url} alt="" />
                                   </div>
                              </div>
                              <div className="col-10">
                                   <p className="text-secondary">{beer.name}</p>
                                   <p className="font-weight-bold">{beer.tagline}</p>
                                   <p><b>First brewed: </b>{beer.first_brewed}</p>
                                   <p><b>Level: </b>{beer.attenuation_level}</p>
                                   <p>{beer.description}</p>
                                   <p><b>Contributed by: </b>{beer.contributed_by}</p>
                              </div>
                         </div>
                    </div>
               </div>
          );
     }
}

export default BeerDetail
