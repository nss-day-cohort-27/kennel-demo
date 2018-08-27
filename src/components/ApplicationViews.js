import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import "./applicationViews.css"
import OwnersList from './owners/OwnersList';


class ApplicationViews extends Component {
   // employeesFromAPI = [
   //    { id: 1, name: "Jessica Younker" },
   //    { id: 2, name: "Jordan Nelson" },
   //    { id: 3, name: "Zoe LeBlanc" },
   //    { id: 4, name: "Blaise Roberts" }
   // ]

   // locationsFromAPI = [
   //    { id: 1, name: "Nashville North", address: "500 Circle Way" },
   //    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
   // ]

   // animalsFromAPI = [
   //    { id: 1, name: "Doodles" },
   //    { id: 2, name: "Jack" },
   //    { id: 3, name: "Angus" },
   //    { id: 4, name: "Henley" },
   //    { id: 5, name: "Derkins" },
   //    { id: 6, name: "Checkers" }
   // ]
   // ownersFromAPI = [
   //    { id: 1, name: "John" },
   //    { id: 2, name: "Jakob" },
   //    { id: 3, name: "Jingle" },
   // ]

   state = {
      employees: [],
      locations: [],
      animals: [],
      owners: [],
      isLoaded: false,
   }

   deleteAnimal = id => {
      fetch(`http://localhost:5002/animals/${id}`, {
         method: "DELETE"
      })
         .then(e => e.json())
         .then(() => fetch(`http://localhost:5002/animals`))
         .then(e => e.json())
         .then(animals => this.setState({
            animals: animals
         }))
   }

   // Example code. Make this fit into how you have written yours.


   componentDidMount() {
      console.log("componentDidMount ApplicationViews")
      const newState = {}

      fetch("http://localhost:5002/animals")
         .then(r => r.json())
         .then(animals => newState.animals = animals)
         .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
         .then(employees => newState.employees = employees)
         .then(() => fetch("http://localhost:5002/locations")
            .then(r => r.json()))
         .then(locations => newState.locations = locations)
         // .then(() => this.setState(newState, this.showMe))
         .then(() => this.setState(newState, () => { console.log("this state after fetch", this.state)}));
   }


   render() {
      console.log("render! ApplicationViews");
      //https://reacttraining.com/react-router/
      //https://reacttraining.com/react-router/web/example/basic
      return (
         <main>
            <Route exact path="/" render={(props) => {
               return <LocationList locations={this.state.locations} />
            }} />
            <Route exact path="/locations" render={(props) => {
               return <LocationList locations={this.state.locations} />
            }} />
            <Route path="/animals" render={(props) => {
                  return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal}/>
            }} />
            <Route path="/employees" render={(props) => {
               return <EmployeeList employees={this.state.employees} />
            }} />
            <Route path="/owners" render={(props) => {
               return <OwnersList owners={this.state.owners} />
            }} />
         </main>
      )
   }
}

export default ApplicationViews