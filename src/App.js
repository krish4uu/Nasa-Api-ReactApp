import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Route component={Home} exact path="/" />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </div>
    </Router>
  );
}
