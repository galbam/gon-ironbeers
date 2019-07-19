import React, { Component } from 'react';
// import Header from './Header';
import uGuid from 'uuid/v1';
//import axios from "axios";

class NewBeer extends Component {
     state = {
          name: ""
     };

     handleSubmit = event => {
          event.preventDefault();

          const newBeer = {
               id: uGuid(),
               name: this.state.name,
               tagline: this.state.tagline,
               description: this.state.description,
               firstBrewed: this.state.firstBrewed,
               attenuationLevel: this.state.attenuationLevel,
               contributedBy: this.state.contributedBy
          };

          //this.createNewBeer(newBeer);

          // this.setState({
          //      name: "",
          //      calories: 0,
          //      image: "",
          //      quantity: 0
          // });

          console.log(newBeer);
     };

     handleChange = event => {
          const name = event.target.name;
          const value = event.target.value;

          this.setState({
               [name]: value
          });
     };

     render() {
          return (
               <div>
                    {/* <Header /> */}
                    <div className="container">
                         <h1>New Beer</h1>
                         <form onSubmit={this.handleSubmit}>
                              <div className="form-group">
                                   <label htmlFor="name">Name:</label>
                                   <input className="form-control"
                                        onChange={this.handleChange}
                                        type="text"
                                        name="name"
                                        id="name"
                                   />
                              </div>

                              <div className="form-group">
                                   <label htmlFor="tagline">Tagline:</label>
                                   <input className="form-control"
                                        onChange={this.handleChange}
                                        type="text"
                                        name="tagline"
                                        id="tagline"
                                   />
                              </div>

                              <div className="form-group">
                                   <label htmlFor="description">Description:</label>
                                   <textarea className="form-control"
                                        onChange={this.handleChange}
                                        rows="5"                                        
                                        name="description"
                                        id="description"
                                   />
                              </div>

                              <div className="form-group">
                                   <label htmlFor="firstBrewed">First Brewed:</label>
                                   <input className="form-control"
                                        onChange={this.handleChange}
                                        type="text"
                                        name="firstBrewed"
                                        id="firstBrewed"
                                   />
                              </div>

                              <div className="form-group">
                                   <label htmlFor="brewersTips">Brewers Tips:</label>
                                   <input className="form-control"
                                        onChange={this.handleChange}
                                        type="text"
                                        name="brewersTips"
                                        id="brewersTips"
                                   />
                              </div>

                              <div className="form-group">
                                   <label htmlFor="attenuationLevel">Attenuation Level:</label>
                                   <input className="form-control"
                                        onChange={this.handleChange}
                                        type="text"
                                        name="attenuationLevel"
                                        id="attenuationLevel"
                                   />
                              </div>

                              <div className="form-group">
                                   <label htmlFor="contributedBy">Contributed by:</label>
                                   <input className="form-control"
                                        onChange={this.handleChange}
                                        type="text"
                                        name="contributedBy"
                                        id="contributedBy"
                                   />
                              </div>

                              <button className="btn btn-primary" type="submit">Add Beer</button>
                         </form>
                    </div>
               </div>
          )
     }
}

export default NewBeer;
