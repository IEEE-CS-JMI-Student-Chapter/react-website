import React, { Fragment,lazy, useEffect,useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "./styles.css";
import MobileNav from "./components/NavbarMobile/MobileNav";
import ScrollToTop from "./helpers/ScrollToTop";

import getEvents from "./Functions/getEvents";
import SingleEvent from "./components/Events/SingleEvent";

import Success from "./components/sucess/success";

const App = () => {


  const [events,setevents] = useState({
    upcoming: [],
    previous: []
  })

  useEffect(async () => {
    const info = await getEvents()
    console.log(info)
    setevents(info)

  },[])

  return (
    <Router>
      <Fragment>
        <ScrollToTop />
        <Navbar />
        <MobileNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/events">
            <Events events={events} />
          </Route>
          <Route exact path="/events/:id">
            <SingleEvent events={events}/>
          </Route>
          <Route exact path="/success/">
            <Success />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
