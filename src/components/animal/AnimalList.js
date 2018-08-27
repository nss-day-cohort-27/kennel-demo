import React, { Component } from 'react'
import './animal.css'
import dog from "./DogIcon.png"

export default class AnimalList extends Component {
   render() {
      return (
         <section className="animals">
            {
               this.props.animals.map(animal => {
                 return <div key={animal.id} className="card">
                           <div className="card-body">
                              <h5 className="card-title">
                              <img src={dog} alt="dog icon" className="icon--dog" />
                              {animal.name}
                              <button onClick={() => this.props.deleteAnimal(animal.id)}
                                 className="button">Delete</button>
                              </h5>
                           </div>
                        </div>
                  })
            }
         </section>
      )
   }
}