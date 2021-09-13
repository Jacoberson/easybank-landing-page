import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import NextGen from "./components/NextGen";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div className="relative">
      <Nav />
      <Header />
      <NextGen />
      <WhyChoose />
    </div>
  );
}

export default App;
