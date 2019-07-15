import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import {Route ,Switch ,Router as BrowserRouter} from "react-router-dom"
import LifeCycle from "./components/LifeCycel"
//import Common from "./components/common"
//import {Clock} from "./components/common"
function App() {
  return (
    <div className="App">
      {/* <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component ={Topics} / >
      </Router> */}
      {/* <Common name= "ali"/>
      <Common name= "xyz"/> */}
     {/* <Clock/> */}
      <LifeCycle/>
    </div>
  );
}
export default App;