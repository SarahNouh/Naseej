import React, { Component } from "react";
import { IndividualServiceData } from "../interfaces/individualServiceData";
import "../scss/paginated-cards.scss";
interface PaginatedCardsProps {
  individualServiceData: IndividualServiceData[];
  cardFooterText: string;
  language: string;
}
interface PaginatedCardsState {
  currentIndividualServiceItems: IndividualServiceData[];
}
class PaginatedCards extends Component<
  PaginatedCardsProps,
  PaginatedCardsState
> {
  currentItemsIndex: number;
  constructor(props: PaginatedCardsProps) {
    super(props);
    this.currentItemsIndex = 4;
    let currentItems: IndividualServiceData[] = [];
    //load initial four items
    for (let i = 0; i < 4; i++) {
      currentItems.push(props.individualServiceData[i]);
    }
    this.state = {
      currentIndividualServiceItems: currentItems
    };
  }

  componentWillReceiveProps(props: PaginatedCardsProps) {
    if (props.cardFooterText !== this.props.cardFooterText) {
      //if the language has changed
      //push the new data to be displayed
      let currentItems: IndividualServiceData[] = [];

      for (
        let i = this.currentItemsIndex - 4;
        i < this.currentItemsIndex;
        i++
      ) {
        if (props.individualServiceData[i] !== undefined)
          currentItems.push(props.individualServiceData[i]);
      }
      //reverse items in case it was arabic
      props.language === "ar" ? currentItems.reverse() : null;
      this.setState({
        currentIndividualServiceItems: currentItems
      });
    }
  }
  handleGetNextItems = () => {
    if (this.currentItemsIndex < this.props.individualServiceData.length) {
      let currentItems: IndividualServiceData[] = [];

      for (
        let i = this.currentItemsIndex;
        i < this.currentItemsIndex + 4;
        i++
      ) {
        if (this.props.individualServiceData[i] !== undefined)
          currentItems.push(this.props.individualServiceData[i]);
      }
      this.currentItemsIndex += 4;
      //reverse items in case it was arabic
      this.props.language === "ar" ? currentItems.reverse() : null;
      this.setState({
        currentIndividualServiceItems: currentItems
      });
    }
  };
  handleGetPreviousItems = () => {
    let newIndex =
      this.currentItemsIndex - 4 < 4 ? 4 : this.currentItemsIndex - 4;
    if (this.currentItemsIndex !== newIndex) {
      let currentItems: IndividualServiceData[] = [];

      for (let i = newIndex - 4; i < newIndex; i++) {
        if (this.props.individualServiceData[i] !== undefined)
          currentItems.push(this.props.individualServiceData[i]);
      }
      this.currentItemsIndex = newIndex;
      //reverse items in case it was arabic
      this.props.language === "ar" ? currentItems.reverse() : null;
      this.setState({
        currentIndividualServiceItems: currentItems
      });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <svg
          className="tab-arrow-btn left"
          onClick={() => {
            this.props.language === "ar"
              ? this.handleGetNextItems()
              : this.handleGetPreviousItems();
          }}
        >
          <path d="M30.910,16.031 L21.331,25.611 L30.910,35.191 C31.556,35.836 31.556,36.886 30.910,37.534 C30.263,38.179 29.213,38.179 28.567,37.534 L17.823,26.787 C17.497,26.461 17.335,26.034 17.338,25.611 C17.338,25.183 17.497,24.760 17.823,24.432 L28.567,13.689 C29.213,13.041 30.263,13.041 30.910,13.689 C31.556,14.336 31.556,15.384 30.910,16.031 ZM50.224,25.491 C50.224,39.149 39.150,50.226 25.492,50.226 C11.831,50.229 0.758,39.154 0.758,25.491 C0.758,11.830 11.831,0.757 25.489,0.757 C39.150,0.757 50.224,11.830 50.224,25.491 L50.224,25.491 ZM4.071,25.491 C4.071,37.301 13.682,46.912 25.489,46.912 C37.298,46.912 46.907,37.301 46.907,25.491 C46.911,13.681 37.301,4.070 25.489,4.070 C13.682,4.070 4.071,13.681 4.071,25.491 Z" />
        </svg>
        <div
          className={
            "row " + (this.props.language === "ar" ? "justify-content-end" : "")
          }
        >
          {this.state.currentIndividualServiceItems.map((item, i) => {
            return (
              <div className="col-3" key={i}>
                <div className="services-card">
                  <div className="card-content">
                    <h5 className="card-title">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>

                  <div className="card-footer">
                    <a href="#">{this.props.cardFooterText}</a>
                    <svg className="manual-icon">
                      <path d="M27.861,20.998 L27.861,22.999 L0.864,22.999 L0.864,20.998 L3.864,20.998 L3.864,1.998 L1.864,1.998 L1.864,-0.001 L26.861,-0.001 L26.861,1.999 L24.861,1.998 L24.861,20.998 L27.861,20.998 ZM22.861,1.998 L5.863,1.998 L5.863,20.998 L12.863,20.998 L12.863,17.998 L12.959,17.741 C12.896,17.249 13.391,16.321 14.196,16.321 C15.001,16.321 15.862,17.226 15.862,17.998 L15.862,20.998 L22.861,20.998 L22.861,1.998 ZM12.863,9.000 L15.863,9.000 L15.863,12.000 L12.863,12.000 L12.863,9.000 ZM20.862,7.000 L17.863,7.000 L17.863,4.000 L20.862,4.000 L20.862,7.000 ZM20.862,12.000 L17.863,12.000 L17.863,9.000 L20.862,9.000 L20.862,12.000 ZM20.862,17.000 L17.863,17.000 L17.863,14.000 L20.862,14.000 L20.862,17.000 ZM12.863,4.000 L15.863,4.000 L15.863,7.000 L12.863,7.000 L12.863,4.000 ZM7.864,14.000 L10.864,14.000 L10.864,17.000 L7.864,17.000 L7.864,14.000 ZM7.864,9.000 L10.864,9.000 L10.864,12.000 L7.864,12.000 L7.864,9.000 ZM7.864,4.000 L10.864,4.000 L10.864,7.000 L7.864,7.000 L7.864,4.000 Z" />
                    </svg>
                    <svg className="electronic-icon">
                      <path d="M25.865,18.999 L1.868,18.999 C1.370,18.999 0.868,18.478 0.868,17.999 L0.868,16.998 L12.867,16.998 L12.867,17.999 L14.866,17.999 L14.866,16.998 L26.865,16.998 L26.865,17.999 C26.865,18.478 26.363,18.999 25.865,18.999 ZM10.911,4.960 L10.911,3.790 C10.911,3.585 11.077,3.418 11.282,3.418 C11.488,3.418 11.654,3.585 11.654,3.790 L11.654,4.960 C11.654,5.165 11.488,5.332 11.282,5.332 C11.077,5.332 10.911,5.165 10.911,4.960 ZM12.691,5.816 C12.596,5.816 12.501,5.780 12.429,5.707 C12.283,5.562 12.283,5.327 12.429,5.181 L13.254,4.354 C13.399,4.209 13.635,4.209 13.780,4.354 C13.925,4.499 13.925,4.735 13.780,4.880 L12.954,5.707 C12.882,5.780 12.787,5.816 12.691,5.816 ZM18.609,13.357 L17.530,14.438 C17.460,14.507 17.366,14.547 17.267,14.547 C17.169,14.547 17.074,14.507 17.005,14.438 L14.793,12.223 L13.883,13.803 C13.812,13.927 13.676,13.998 13.534,13.988 C13.392,13.978 13.268,13.887 13.216,13.755 L10.410,6.708 C10.355,6.570 10.387,6.412 10.492,6.307 C10.597,6.202 10.755,6.170 10.893,6.224 L17.927,9.035 C18.060,9.087 18.150,9.212 18.160,9.354 C18.170,9.496 18.098,9.632 17.975,9.703 L16.398,10.616 L18.609,12.830 C18.754,12.976 18.754,13.211 18.609,13.357 ZM7.608,7.098 C7.608,6.892 7.775,6.726 7.979,6.726 L9.147,6.726 C9.352,6.726 9.519,6.892 9.519,7.098 C9.519,7.304 9.352,7.470 9.147,7.470 L7.979,7.470 C7.775,7.470 7.608,7.304 7.608,7.098 ZM9.539,5.879 L8.713,5.052 C8.569,4.906 8.569,4.670 8.713,4.525 C8.859,4.380 9.094,4.380 9.239,4.525 L10.065,5.352 C10.209,5.497 10.209,5.733 10.065,5.879 C9.992,5.951 9.897,5.987 9.802,5.987 C9.707,5.987 9.612,5.951 9.539,5.879 ZM9.068,9.600 C8.995,9.673 8.900,9.709 8.805,9.709 C8.710,9.709 8.615,9.673 8.542,9.600 C8.397,9.455 8.397,9.219 8.542,9.074 L9.368,8.247 C9.513,8.102 9.748,8.102 9.893,8.247 C10.039,8.392 10.039,8.628 9.893,8.773 L9.068,9.600 ZM23.866,1.999 L3.868,1.999 L3.868,14.998 L1.868,14.998 L1.868,0.999 C1.868,0.521 2.370,-0.001 2.868,-0.001 L24.865,-0.001 C25.363,-0.001 25.865,0.521 25.865,0.999 L25.865,14.998 L23.865,14.998 L23.866,1.999 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <svg
          className="tab-arrow-btn right"
          onClick={() => {
            this.props.language === "ar"
              ? this.handleGetPreviousItems()
              : this.handleGetNextItems();
          }}
        >
          <path d="M19.937,16.031 L29.517,25.611 L19.937,35.191 C19.292,35.836 19.292,36.886 19.937,37.534 C20.584,38.179 21.634,38.179 22.280,37.534 L33.024,26.787 C33.351,26.461 33.513,26.034 33.510,25.611 C33.510,25.183 33.351,24.760 33.024,24.432 L22.280,13.689 C21.634,13.041 20.584,13.041 19.937,13.689 C19.292,14.336 19.292,15.384 19.937,16.031 ZM0.623,25.491 C0.623,39.149 11.697,50.226 25.356,50.226 C39.017,50.229 50.090,39.154 50.090,25.491 C50.090,11.830 39.017,0.757 25.359,0.757 C11.697,0.757 0.623,11.830 0.623,25.491 L0.623,25.491 ZM46.776,25.491 C46.776,37.301 37.166,46.912 25.359,46.912 C13.550,46.912 3.940,37.301 3.940,25.491 C3.937,13.681 13.547,4.070 25.359,4.070 C37.166,4.070 46.776,13.681 46.776,25.491 Z" />
        </svg>
      </div>
    );
  }
}
export default PaginatedCards;
