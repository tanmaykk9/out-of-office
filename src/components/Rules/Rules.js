import React from "react";
import rulesImage from "../../assets/images/rules.png";
import noSmoke from "../../assets/images/nosmoking.png";
import nopets from "../../assets/images/nopets.png";
import noglass from "../../assets/images/noglass.PNG";
import quiet from "../../assets/images/quiet.jfif";
import "./rules.css";

const Rules = () => {
  return (
    <div className="px-5 py-5 mx-auto lg:pt-12 lg:px-32 mt-7 mb-7">
      <div className="flex flex-wrap -m-1 md:-m-2 rules-container">
        <div className="flex flex-wrap w-1/5 justify-center">
          <img
            src={rulesImage}
            alt="House Rules"
            className="object-contain w-44"
          />
        </div>
        <div className="flex flex-wrap w-1/5 justify-center flex-col">
          <img
            src={noSmoke}
            alt="House Rules"
            className="object-contain w-20 image-zoom m-auto"
          />
          <p>No Smoking</p>
        </div>
        <div className="flex flex-wrap w-1/5 justify-center flex-col">
          <img
            src={nopets}
            alt="House Rules"
            className="object-contain w-24 image-zoom m-auto"
          />
          <p>No Pets</p>
        </div>
        <div className="flex flex-wrap w-1/5 justify-center">
          <img
            src={noglass}
            alt="House Rules"
            className="object-contain w-24 image-zoom"
          />
        </div>
        <div className="flex flex-wrap w-1/5 justify-center flex-col">
          <img
            src={quiet}
            alt="House Rules"
            className="object-contain w-14 image-zoom m-auto"
          />
          <p>Quiet Time after 10:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export { Rules };
