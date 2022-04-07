import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import "./styles.css";
import MobileNav from "./components/NavbarMobile/MobileNav";
import ScrollToTop from "./helpers/ScrollToTop";
import Footer from "./components/Footer/Footer";
import getEvents from "./Functions/getEvents";
import SingleEvent from "./components/Events/SingleEvent";
import Success from "./components/sucess/success";
import loading from "./images/Loading.gif";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AddForm from "./components/LeetcodeRankings/addForm";
// import LCRankings from "./components/LeetcodeRankings";

const queryClient = new QueryClient();

const LCRankings = lazy(() => import("./components/LeetcodeRankings"));
const Teams = lazy(() => import("./pages/Teams"));

const App = () => {
  const [events, setevents] = useState({
    upcoming: [],
    previous: [],
    state: false,
  });

  const EventsGet = async () => {
    const info = await getEvents();
    console.log(info);
    setevents(info);
  };
  useEffect(() => {
    EventsGet();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Fragment>
          <Navbar />
          <MobileNav />
          <div className="main-container">
            <Switch>
              <Route exact path="/events/:id">
                <SingleEvent events={events} />
              </Route>
              <Route exact path="/" component={Home} />
              <Route exact path="/events">
                <Events events={events} />
              </Route>

              <Suspense
                fallback={
                  <div
                    style={{
                      marginTop: "50vh",
                      marginLeft: "50vw",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <img src={loading} alt="Loading..." />
                  </div>
                }
              >
                <Route exact path="/teams">
                  <Teams />
                </Route>
                <Route exact path="/leetcode">
                  <LCRankings />
                </Route>
                <Route exact path="/leetcode/add">
                  <AddForm />
                </Route>
              </Suspense>

              <Route path="/success">
                <Success />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Fragment>
        <ScrollToTop />
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
