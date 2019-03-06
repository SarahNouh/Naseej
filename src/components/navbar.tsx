import React, { Component } from "react";
import logo from "../images/logo.png";
import "../scss/navbar.scss";
import { NavData } from "../interfaces/navData";

interface NavbarProps {
  navbarData: NavData;
  language: string;
}

class Navbar extends React.Component<NavbarProps> {
  constructor(props: NavbarProps) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <a
          className={
            "navbar-brand " +
            (this.props.language == "AR" ? "order-lg-last" : "")
          }
          href="#"
        >
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className={
              "navbar-nav" +
              (this.props.language === "AR" ? " mr-right" : " ml-auto")
            }
          >
            <li className="nav-item active">
              <a className="nav-link" href="#">
                {this.props.navbarData.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {this.props.navbarData.news}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {this.props.navbarData.services}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {this.props.navbarData.library}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {this.props.navbarData.media}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {this.props.navbarData.support}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
