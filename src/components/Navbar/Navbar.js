import { React } from "react";
import logo from "../../assets/images/ooflogo.png";
import "./navigation.css";

const Navbar = () => {
  return (
    <div className="navigation snipcss-x6jxa">
      <div className="container">
        <header className="navbar" id="top" role="banner">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target=".bs-navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand nav" id="brand">
              <a href="index.html">
                <img src={logo} alt="brand" className="oof-logo" />
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export { Navbar };
