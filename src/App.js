import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/js/Main";
import "./App.css";
import "./components/css/Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={Main} exact></Route>
      </Router>
    </div>
  );
}

export default App;
