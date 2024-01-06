import React, { useEffect, useState } from "react";
import { initHeaderScrolled } from "../../assets/js/headerScrolled";
import { Connect } from "@stacks/connect-react";
import ConnectWallet, { userSession } from "../stacks-session/connect";

const Header = () => {


  return (
    <>
      <header id="header">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a style={{ color: "#0d6efd" }} href="">
              Token Metadata Updater
            </a>
          </h1>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#updatemate">
                  Update Metadata
                </a>
              </li>


              <li>
                <ConnectWallet />
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* .navbar */}
        </div>
      </header>

    </>
  );
};

export default Header;
