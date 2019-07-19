import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Beer extends Component {
     render() {
          const beer = this.props.beer;
          return (
               <div className="d-flex justify-content-center">
                    <div className="container">
                         <div className="row border" >
                              <div className="col-4">
                                   <div>
                                        <img style={{ height: "8rem" }} src={beer.image_url} alt="" />
                                   </div>
                              </div>
                              <div className="col-8" >
                                   <div>
                                        <h5 className="font-weight-bold"><Link to={`/beer/${beer._id}`}>{beer.name}</Link></h5>
                                        <p className="font-weight-light text-secondary">{beer.tagline}</p>
                                        <h6 className="text-sm">{beer.contributed_by}</h6>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
}

export default Beer;
