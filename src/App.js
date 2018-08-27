import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

//////////////////
//NOT USING THIS Component
//////////////////

  render() {
     for(var x = 0; x < 10; x++){
        console.log(x, "yeah")
     }
     const myName = <h2>Brenda</h2>;
// work great here

    return (


       <div>
          {/* won't work */}
       <div>Will this work</div>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {myName}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </div>
    );
  }
}

export default App;
