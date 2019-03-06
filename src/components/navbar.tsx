import React, { Component } from "react";
import logo from "../images/logo.png";
import { NavData } from "../interfaces/navData";

interface NavbarProps {
  navbarData: NavData;
  language: string;
}
interface NavbarState {
  //a boolean to toggle navbar in mobile screens

  showNavbar: boolean;
}
class Navbar extends React.Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props);
    this.state = { showNavbar: false };
  }

  /**
   * A temporary solution to handle toggling navbar in mobile screens
   * As current version of react and bootstrap are crashing and some of bootstrap's javascript behaviour is not working
   * will use react bootstrap instead
   * @param {}
   * @public
   */
  handleToggleNavbar = () => {
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  };
  render() {
    return (
      <nav
        className={
          "navbar navbar-expand-md navbar-dark fixed-top " +
          this.props.language.toLowerCase()
        }
      >
        <a className="navbar-brand " href="#">
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
          onClick={() => {
            this.handleToggleNavbar();
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={
            "collapse navbar-collapse " + (this.state.showNavbar ? "show" : "")
          }
          id="navbarSupportedContent"
        >
          <ul
            className={
              "navbar-nav" +
              (this.props.language === "AR" ? " mr-auto" : " ml-auto")
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
