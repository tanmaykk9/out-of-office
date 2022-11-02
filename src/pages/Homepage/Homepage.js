import React from "react";
import { Navbar } from "../../components/Navbar";
import { Banner } from "../../components/Banner/Banner";
import { Faq } from "../../components/FAQ";
import { Findings } from "../../components/Findings";
import { Checklist } from "../../components/Checklist";
import { Rules } from "../../components/Rules";
import { Gallery } from "../../components/Gallery";
import { Maps } from "../../components/Maps";
import { Footer } from "../../components/Footer";

const Homepage = () => {
  return (
    <div className="main-app">
      <Navbar />
      <Banner />
      <Gallery />
      <Faq />
      <Checklist />
      <Findings />
      <Rules />
      <Maps />
      <Footer />
    </div>
  );
};

export { Homepage };
