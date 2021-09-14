import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import NextGen from "./components/NextGen";
import WhyChoose from "./components/WhyChoose";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Nav visible={visible} setVisible={setVisible} />
      <Header visible={visible} />
      <NextGen />
      <WhyChoose />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
