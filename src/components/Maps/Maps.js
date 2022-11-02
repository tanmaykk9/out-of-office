import React from "react";

const Maps = () => {
  return (
    <div className="maps container px-5 py-5 mx-auto lg:pt-12 lg:px-32 mt-7 mb-7">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10627.27466862145!2d-116.60922600000002!3d48.248618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5363d441f47d469f%3A0xadefed190157f89d!2s505%20Becker%20Ln%2C%20Dover%2C%20ID%2083825!5e0!3m2!1sen!2sus!4v1667381662285!5m2!1sen!2sus"
        width="100%"
        height="250"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
};

export { Maps };
