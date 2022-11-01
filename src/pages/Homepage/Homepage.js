import React from "react";
import { Navbar } from "../../components/Navbar";
import { Banner } from "../../components/Banner/Banner";

const Homepage = () => {
  return (
    <div className="main-app">
      <Navbar />
      <Banner />
    </div>
  );
};

export { Homepage };
