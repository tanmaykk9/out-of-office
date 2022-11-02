import React from "react";
import "./footer.css";
import callIcon from "../../assets/images/telephone-call.png";
import locationIcon from "../../assets/images/location-pin.png";
import emailIcon from "../../assets/images/email.png";

const Footer = () => {
  return (
    <div className="footer my-10 bt-1 py-4">
      <h2 className="text-center text-sky-500 font-bold text-2xl">
        Contact Us
      </h2>
      <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div class="flex flex-wrap -m-1 md:-m-2 justify-center">
          <div class="flex flex-wrap w-1/4 flex-row justify-evenly">
            <span>
              <img
                src={callIcon}
                alt="Call Us"
                className="footer-icon m-auto"
              />
            </span>
            <span>
              <p className="flex-1 text-black">Brent: (425) 518-2037</p>
              <p className="flex-1 text-black">Marie: (303) 520-7864</p>
            </span>
          </div>
          <div class="flex flex-wrap w-1/3 flex-row justify-evenly">
            <img src={locationIcon} alt="address" className="footer-icon" />
            <p>
              <a
                href="https://goo.gl/maps/cnGiFfGvWPMbwaZu6"
                className="p-0 ml-4"
                target="__blank"
              >
                505 Becker Lane, Dover, ID 83825
              </a>
            </p>
          </div>
          <div class="flex flex-wrap w-1/3 flex-row justify-center">
            <img src={emailIcon} alt="address" className="footer-icon" />
            <p>
              <a href="mailto:outofoffice208@gmail.com" className="p-0 ml-4">
                outofoffice208@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="name mt-10">
          <p className="text-center">Enjoy your stay! </p>
          <p className="text-center">The Lazarenkos</p>
        </div>
      </div>
    </div>
  );
};

export { Footer };
