import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "./styles.css";
import MobileNav from "./components/NavbarMobile/MobileNav";
import ScrollToTop from "./helpers/ScrollToTop";
const App = () => {
  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Navbar />
        <MobileNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
