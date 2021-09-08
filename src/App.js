import React from "react";
import AboutUs from "./pages/aboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/nav";
import { Route, Switch } from 'react-router-dom';
import ContactUs from "./pages/contact";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/movieDetails";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
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

    </div>
  );
}

export default App;
