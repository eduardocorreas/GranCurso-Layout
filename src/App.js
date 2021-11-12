import React from "react";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Logo from "./assets/img/logo.png";
import MobileMenu from "./Layout/MobileMenu";

function App() {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom only-mobile">
          <div className="container-fluid">
            <img src={Logo} alt="Logo" width="200px" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <MobileMenu />
            </div>
          </div>
        </nav>
        <div className="container-fluid mt-4">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
