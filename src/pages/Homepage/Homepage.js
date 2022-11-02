import React from "react";
import { Navbar } from "../../components/Navbar";
import { Banner } from "../../components/Banner/Banner";
import { Checklist } from "../../components/Checklist";
import { Gallery } from "../../components/Gallery";
import { Rules } from "../../components/Rules";
import { Maps } from "../../components/Maps";
import { Footer } from "../../components/Footer";

const Homepage = () => {
  return (
    <div className="main-app">
      <Navbar />
      <Banner />
      <Checklist />
      <Gallery />
      <Rules />
      <Maps />
      <Footer />
    </div>
  );
};

export { Homepage };
