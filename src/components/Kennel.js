import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"


import "bootstrap/dist/css/bootstrap.min.css"
import "./kennel.css"

class Kennel extends Component {
   render() {
      return (
         <React.Fragment>
            <NavBar />
            <ApplicationViews />
         </React.Fragment>
      )
   }
}

export default Kennel