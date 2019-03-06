import React, { Component } from "react";

import { IndividualServiceData } from "../interfaces/individualServiceData";
import { ServiceTabsData } from "../interfaces/serviceTabsData";
import PaginatedCards from "./paginatedCards";
import "../scss/serviceTabs.scss";

interface serviceTabsProps {
  headerTitle: string;
  headerBtn: string;
  individualServiceData: IndividualServiceData[];
  cardFooterText: string;
  tabsData: ServiceTabsData[];
  language: string;
}
interface serviceTabsState {
  activeTab: string[];
  activeTabContent: string[];
}
class ServiceTabs extends Component<serviceTabsProps, serviceTabsState> {
  constructor(props: serviceTabsProps) {
    super(props);
    //initializing the arrays for setting the active tabs
    let activeTabState: string[] = [];
    let activeTabContentState: string[] = [];
    //if lang is arabic: set last tab to be the first active one
    //if lang is eng: set first tab to be the first active one
    let initialIndex = props.language === "ar" ? props.tabsData.length - 1 : 0;
    for (let i = 0; i < props.tabsData.length; i++) {
      activeTabState[i] = "";
      activeTabContentState[i] = "";
    }
    activeTabState[initialIndex] = "active";
    activeTabContentState[initialIndex] = "show active";
    this.state = {
      activeTab: activeTabState,
      activeTabContent: activeTabContentState
    };
  }
  componentWillReceiveProps(props: serviceTabsProps) {
    if (this.props.language !== props.language) {
      let activeTabState: string[] = [];
      let activeTabContentState: string[] = [];
      //if lang is arabic: set last tab to be the first active one
      //if lang is eng: set first tab to be the first active one
      let initialIndex =
        props.language === "ar" ? props.tabsData.length - 1 : 0;
      for (let i = 0; i < props.tabsData.length; i++) {
        activeTabState[i] = "";
        activeTabContentState[i] = "";
      }
      // let index = this.state.activeTab.findIndex(elm => elm === "active");
      activeTabState[initialIndex] = "active";
      activeTabContentState[initialIndex] = "show active";
      this.setState({
        activeTab: activeTabState,
        activeTabContent: activeTabContentState
      });
    }
  }
  handleTabChange = (index: number) => {
    //reset previous state first
    let activeTabState: string[] = [];
    let activeTabContentState: string[] = [];

    for (let i = 0; i < this.props.tabsData.length; i++) {
      activeTabState[i] = "";
      activeTabContentState[i] = "";
    }
    activeTabState[index] = " active";
    activeTabContentState[index] = " show active";
    this.setState({
      activeTab: activeTabState,
      activeTabContent: activeTabContentState
    });
  };

  render() {
    return (
      <div className={this.props.language}>
        <div className="services-header container-fluid">
          {this.props.language === "ar" ? (
            <button className="btn services-btn" type="button">
              {this.props.headerBtn}
            </button>
          ) : (
            <h4>{this.props.headerTitle}</h4>
          )}
          <hr />
          {this.props.language === "ar" ? (
            <h4>{this.props.headerTitle}</h4>
          ) : (
            <button className="btn services-btn" type="button">
              {this.props.headerBtn}
            </button>
          )}
        </div>

        <ul
          className={
            "nav nav-tabs service-tabs " +
            (this.props.language === "ar" ? " justify-content-end" : "")
          }
          role="tablist"
        >
          {this.props.tabsData.map((tab, i) => {
            return (
              <li className="nav-item" key={i}>
                <a
                  className={"nav-link tab-item " + this.state.activeTab[i]}
                  id={tab.id + "-tab"}
                  data-toggle="tab"
                  href={"#" + tab.id}
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected="true"
                  onClick={() => {
                    this.handleTabChange(i);
                  }}
                >
                  <div className="tab-img-container">
                    <img className="tab-image" src={tab.icon} alt="" />
                  </div>
                  <h5 className="tab-title">{tab.title}</h5>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="tab-content" id="myTabContent">
          {this.props.tabsData.map((item, i) => {
            return (
              <div
                className={"tab-pane fade " + this.state.activeTabContent[i]}
                id={item.id}
                role="tabpanel"
                aria-labelledby={item.id}
                key={i}
              >
                <PaginatedCards
                  individualServiceData={this.props.individualServiceData}
                  cardFooterText={this.props.cardFooterText}
                  language={this.props.language}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ServiceTabs;
