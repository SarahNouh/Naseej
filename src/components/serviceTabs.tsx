// @Author: sarahnouh
// @Date:   2019-03-04
// @Last modified by:   sarahnouh
// @Last modified time: 2019-03-04
import React, { Component } from "react";
import { IndividualServiceData } from "../interfaces/individualServiceData";
import { ServiceTabsData } from "../interfaces/serviceTabsData";
import PaginatedCards from "./paginatedCards";

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

    for (let i = 0; i < props.tabsData.length; i++) {
      activeTabState[i] = "";
      activeTabContentState[i] = "";
    }
    activeTabState[0] = "active";
    activeTabContentState[0] = "show active";
    this.state = {
      activeTab: activeTabState,
      activeTabContent: activeTabContentState
    };
  }
  /**
   * A function invoked whenever the component received props from parent
   * @param {}
   */
  componentWillReceiveProps(props: serviceTabsProps) {
    if (this.props.language !== props.language) {
      let activeTabState: string[] = [];
      let activeTabContentState: string[] = [];

      for (let i = 0; i < props.tabsData.length; i++) {
        activeTabState[i] = "";
        activeTabContentState[i] = "";
      }
      activeTabState[0] = "active";
      activeTabContentState[0] = "show active";
      this.setState({
        activeTab: activeTabState,
        activeTabContent: activeTabContentState
      });
    }
  }
  /**
   * A function invoked on tab click to handle toggling tabs
   * @param {index} index the index of the new current tab
   */
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
      <div className={"service-tabs-section " + this.props.language}>
        <div className="services-header container-fluid">
          <h4>{this.props.headerTitle}</h4>

          <hr />

          <button className="btn services-btn" type="button">
            {this.props.headerBtn}
          </button>
        </div>

        <ul className="nav nav-tabs service-tabs " role="tablist">
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
