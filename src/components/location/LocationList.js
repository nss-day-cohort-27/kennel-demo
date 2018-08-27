import React, {Component} from 'react';


export default class LocationList extends Component{

   render(){
      console.log("props", this.props);
      return (
         <div className="locations">
            <h3>Our Locations</h3>
            {
               this.props.locations.map(location =>
                  <div id={`location--${location.id}`} key={location.id}>
                     <h4>{location.name}</h4>
                     <p>{location.address}</p>
                  </div>
               )
            }
         </div>
      )
   }
}