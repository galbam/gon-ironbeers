import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Header extends Component {
     render() {
          return (
               <div className="container">
                    <div className="nav bg-primary">
                         <Link className="nav-link" to="/" >Home</Link>
                         <Link className="nav-link" to="/beers" >Beers</Link>
                         <Link className="nav-link" to="/random-beer" >Random Beer</Link>
                         <Link className="nav-link" to="/new-beer" >New Beer</Link>
                    </div>
               </div>
          )
     }
}

export default Header
