import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import NextGen from "./components/NextGen";
import WhyChoose from "./components/WhyChoose";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <Nav visible={visible} setVisible={setVisible} />
      <Header visible={visible} />
      <NextGen />
      <WhyChoose />
    </div>
  );
}

export default App;
