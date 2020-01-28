import React, { Component } from 'react';
import logo from './logo-ravn.png';
import './App.css';

//This is a function for desining the page head
class HeaderApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Ravn Star Wars Registry
          </h1>
        </header>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//           Ravn Star Wars Registry
//         </h1>        
//       </header>
//     </div>
//   );
// }

export default HeaderApp;