// @Author: sarahnouh
// @Date:   2019-03-04
// @Last modified by:   sarahnouh
// @Last modified time: 2019-03-04
import React, { Component } from "react";
import { CarouselData } from "../interfaces/carouselData";
import sliderBackgroundImage from "../images/slider-image.png";
import slideImage from "../images/slide-image.png";

interface CarouselProps {
  /**
   *The data of the slides in the carousel
   *@type CarouselData
   */
  carouselData: CarouselData;
  /**
   *A string that indicates the current language
   *@type string
   */
  language: string;
}
interface CarouselState {
  /**
   *An array that indicates the current active slide and indicators
   *@type string[]
   */
  activeSlide: string[];
}

class Carousel extends Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      activeSlide: ["active", "", ""]
    };
  }
  /**
   * A temporary solution to handle sliding carousels
   * As current version of react and bootstrap are crashing and some of bootstrap's javascript behaviour is not working
   * will use react-bootstrap instead
   * @param {index} index of current slide
   */
  handleSlide = (index: number) => {
    let activeState = ["", "", ""];
    activeState[index] = "active";
    this.setState({
      activeSlide: activeState
    });
  };
  render() {
    return (
      <div
        id="slider"
        className={"carousel slide " + this.props.language}
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#slider"
            data-slide-to="0"
            className={this.state.activeSlide[0]}
            onClick={() => {
              this.handleSlide(0);
            }}
          />
          <li
            data-target="#slider"
            data-slide-to="1"
            className={this.state.activeSlide[1]}
            onClick={() => {
              this.handleSlide(1);
            }}
          />
          <li
            data-target="#slider"
            data-slide-to="2"
            className={this.state.activeSlide[2]}
            onClick={() => {
              this.handleSlide(2);
            }}
          />
        </ol>
        <div className="carousel-inner">
          <div className={"carousel-item " + this.state.activeSlide[0]}>
            <img
              src={sliderBackgroundImage}
              className="d-block carousel-background "
              alt="..."
              onError={e => {
                let target: any = e.target;
                target.onerror = null;
                target.src =
                  "https://via.placeholder.com/1000x800.png?text=NoImage";
              }}
            />
            <div className="carousel-content">
              <div className="row">
                <div className="col-6">
                  <div className="carousel-text-content">
                    <h3 className="carousel-title">
                      {this.props.carouselData.title}{" "}
                    </h3>
                    <p className="carousel-text">
                      {this.props.carouselData.description}
                    </p>
                    <button className="btn carousel-btn" type="button">
                      {this.props.carouselData.buttonText}
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <img
                    src={slideImage}
                    className="d-block carousel-image"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={"carousel-item " + this.state.activeSlide[1]}>
            <img
              src={sliderBackgroundImage}
              className="d-block carousel-background"
              alt="..."
              onError={e => {
                let target: any = e.target;
                target.onerror = null;
                target.src =
                  "https://via.placeholder.com/1000x800.png?text=NoImage";
              }}
            />
          </div>
          <div className={"carousel-item " + this.state.activeSlide[2]}>
            <img
              src={sliderBackgroundImage}
              className="d-block carousel-background"
              alt="..."
              onError={e => {
                let target: any = e.target;
                target.onerror = null;
                target.src =
                  "https://via.placeholder.com/1000x800.png?text=NoImage";
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;
