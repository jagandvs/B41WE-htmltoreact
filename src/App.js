import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import Services from "./Services";
import "./App.css";
const App = () => {
  return (
    <div>
      <NavBar name="guvi" />
      <Header />
      <Services />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
