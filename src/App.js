import React from "react";
import AboutUs from "./pages/aboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AboutUs/>
    </div>
  );
}

export default App;
