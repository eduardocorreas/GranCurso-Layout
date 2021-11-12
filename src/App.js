import React from "react";
import Sidebar from "./Layout/Sidebar";
import Content from "./Layout/Content";
import Logo from "./assets/img/logo.png";
import MobileMenu from "./Layout/MobileMenu";

function App() {
  return (
    <div class="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom only-mobile">
          <div class="container-fluid">
            <img src={Logo} alt="Logo" width="200px" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <MobileMenu />
            </div>
          </div>
        </nav>
        <div class="container-fluid mt-4">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
