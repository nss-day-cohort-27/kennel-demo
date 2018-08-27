//test this out later

//put this in your component
//import * as routes from '../../constants/routes'

// put this in render - check out the switch
/*
<Switch>
   <Route
      exact path={routes.HOME}
      component={() => <Home user={this.state.user} />}
   />

   <Route
      exact path={routes.ADD_FEELING}
         component={() => <AddItem user={this.state.user} uid={this.state.user.uid} edit={this.state.user.feelings} type="feelings"n group="icon"  />}
   />

   <Route
      exact path={routes.ADD_DESCRIPTIVE}
         component={() => <AddItem user={this.state.user} uid={this.state.user.uid} edit={this.state.user.descriptives} type="descriptives" group="icon"  />}
   />

   <Route
      exact path={routes.ADD_ACTIVITIES}
         component={() => <AddItem user={this.state.user} uid={this.state.user.uid} edit={this.state.user.activities} type="activities" group="icon"  />}
   />
</Switch>
   */

export const HOME = '/';
export const ANIMALS = '/animals';
export const EMPLOYEES = '/employees';
export const LOCATIONS = '/locations';