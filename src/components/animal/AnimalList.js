import React, { Component } from 'react'
import './animal.css'
import dog from "./DogIcon.png"
import {Link} from "react-router-dom"

export default class AnimalList extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="animalButton">
               <button type="button"
                  className="btn btn-success"
                  onClick={() => {
                     this.props.history.push("/animals/new")
                  }}> Admit Animal</button>
            </div>

            <section className="animals">
               {
                  this.props.animals.map(animal => {
                  return <div key={animal.id} className="card">
                              <div className="card-body">
                                 <h5 className="card-title">
                                 <img src={dog} alt="dog icon" className="icon--dog" />
                                 {animal.name}
                                 <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                 <button onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="button">Delete</button>
                                 </h5>
                              </div>
                           </div>
                     })
               }
            </section>
         </React.Fragment>
      )
   }
}