import React, { Component } from "react"
import "./animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
   state={
      animal: {},
      edit: false,
   }

   handleEditClicked = () => {
      console.log("edit clicked");
      this.setState({
         edit: true,
      })
   }
   // Update state whenever an input field is edited
   handleFieldChange = (whichOne, evt) => {
      console.log("evt handleFieldChange", whichOne);
      const updateAnimal = this.state.animal;
      const stateToChange = whichOne
      updateAnimal[stateToChange] = evt.target.value
      this.setState({updateAnimal})
   }

   constructNewAnimal = evt => {
      evt.preventDefault()
     // if (this.state.animal.employee === "") {
         // window.alert("Please select a caretaker")
      //} else {
         const animal = {
            name: this.state.animal.name,
            breed: this.state.animal.breed,
            // employeeId: this.props.employees.find(e => e.name === this.state.animal.employee).id
         }

         // Create the animal and redirect user to animal list
         this.props.editAnimal(animal, parseInt(this.props.match.params.animalId));
         this.setState({edit:false});
      //}
   }

   componentDidMount = () => {
      const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}
      // console.log("eid", this.props.animals);
      // animal.employeeId = this.props.employees.find(e => e.name === animal.employeeId);

      this.setState({animal})
   }

   render() {
      /*
          Using the route parameter, find the animal that the
          user clicked on by looking at the `this.props.animals`
          collection that was passed down from ApplicationViews
      */
      // const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}

      return (
         <section className="animal">
            <div key={this.state.animal.id} className="card">
               <div className="card-body">
              aloha {this.state.animal.name}
               {(this.state.edit) ?
                  <input type="text" required="true"
                     className="form-control"
                     onChange={(evt)=>{this.handleFieldChange("name", evt)}}
                     id="name"
                     value={this.state.animal.name} />
                  :
                  <h4 className="card-title">
                     <img src={dog} className="icon--dog" />
                     {this.state.animal.name}
                  </h4>
               }
                  <h6 className="card-title">{this.state.animal.breed}</h6>
                  <a href="#"
                     onClick={() => this.props.deleteAnimal(this.state.animal.id)
                        .then(() => this.props.history.push("/animals"))}
                     className="card-link">Delete</a>

                  {(this.state.edit) ?
                     <button onClick={this.constructNewAnimal}
                        className="button">Save Critter</button>
                     : <button onClick={() => this.handleEditClicked()}
                        className="button">Edit Critter</button>
                  }

                  {/*  <Link className="nav-link" to={`/animals/edit/${animal.id}`}>Edit Critter</Link>
                  */}
               </div>
            </div>
         </section>
      )
   }
}