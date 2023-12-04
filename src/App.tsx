import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/project/Projects";
import Contacts from "./pages/contact/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <div className=" bg-[#171023] text-white">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
