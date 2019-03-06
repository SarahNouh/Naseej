import React, { Component } from "react";
import { CarouselData } from "../interfaces/carouselData";
import sliderBackgroundImage from "../images/slider-image.png";
import slideImage from "../images/slide-image.png";
import * as $ from "jquery";

interface CarouselProps {
  carouselData: CarouselData;
  language: string;
}
interface CarouselState {
  activeSlide: string[];
}

class Carousel extends Component<CarouselProps, CarouselState> {
  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      activeSlide: ["active", "", ""]
    };
  }
  componentDidMount() {
    // $(".carousel").addClass("z");
  }
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
            />
          </div>
          <div className={"carousel-item " + this.state.activeSlide[2]}>
            <img
              src={sliderBackgroundImage}
              className="d-block carousel-background"
              alt="..."
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;
