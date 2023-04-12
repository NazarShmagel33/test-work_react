import React, { useState } from "react";

import AppHeader from "./components/AppHeader/app-header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";


function App() {


  return (
    
    <div className="max-w-screen-xl mx-auto h-screen grid grid-rows-auto-[auto_1fr_auto]">
      <AppHeader/>
    <HeroSection/>
    <Footer/>
    </div>
    
    
  );
}

export default App;
