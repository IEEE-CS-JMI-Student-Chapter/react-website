import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "./styles.css";
import MobileNav from "./components/NavbarMobile/MobileNav";
const App = () => {
  return (
    <Router>
      <Navbar />
      <MobileNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/events" component={Events} />
      </Switch>
    </Router>
  );
};

export default App;
