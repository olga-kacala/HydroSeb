import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'; 
import { Home } from "./components/Home/Home";
import { Offer} from "./components/Offer/Offer";
import { Locations } from "./components/Locations/Locations";
import { Gallery } from "./components/Gallery/Gallery";
import { Contact } from "./components/Contact/Contact";
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.main}>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
