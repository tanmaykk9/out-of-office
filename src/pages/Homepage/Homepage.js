import React from "react";
import { Navbar } from "../../components/Navbar";
import { Banner } from "../../components/Banner/Banner";
import { Faq } from "../../components/FAQ";

const Homepage = () => {
  return (
    <div className="main-app">
      <Navbar />
      <Banner />
      <Faq/>
    </div>
  );
};

export { Homepage };
