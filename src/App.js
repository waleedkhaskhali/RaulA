import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cafe from "./components/Cafe/Cafe";
import { Home } from "./components/Home";
import { Raul } from "./components/Raul/Raul";
import Bio from "./components/RaulAvila/Bio";
import ClientList from "./components/RaulAvila/ClientList";
import Contact from "./components/RaulAvila/Contact";
import Press from "./components/RaulAvila/Press";
import RaulAvila from "./components/RaulAvila/RaulAvila";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Raul />} />
          <Route path="/Raul_Inc/Home" element={<RaulAvila />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/press" element={<Press />} />
          <Route path="/clientlist" element={<ClientList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Cafe" element={<Cafe />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
