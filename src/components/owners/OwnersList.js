import React, { Component } from 'react'


export default class OwnersList extends Component {
   render() {
      return (
         <div className="owners">
            {
               this.props.owners.map(owner =>
                  <div id={`owner--${owner.id}`} key={owner.id}>
                     <h4>{owner.name}</h4>
                  </div>
               )
            }
         </div>
      );
   }
}