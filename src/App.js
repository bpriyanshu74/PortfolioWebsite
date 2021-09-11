import React from "react";
import AboutUs from "./pages/aboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/nav";
import { Route, Switch, useLocation } from 'react-router-dom';
import ContactUs from "./pages/contact";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/movieDetails";
import { AnimatePresence } from 'framer-motion';



function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/work' exact>
            <OurWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetails />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;

