import React, { Component } from "react";
import "./App.scss";
import Carousel from "./components/carousel";
import Navbar from "./components/navbar";
import { NavData } from "./interfaces/navData";
import { CarouselData } from "./interfaces/carouselData";
import { ServiceTabsData } from "./interfaces/serviceTabsData";
import { IndividualServiceData } from "./interfaces/individualServiceData";
import ServiceTabs from "./components/serviceTabs";
import SubNav from "./components/subnav";
import businessImage from "./images/business-services.png";
import individualsImage from "./images/individual-services.png";
import mostUsedImage from "./images/most-used-services.png";
import newServicesImage from "./images/new-services.png";
import allServicesImage from "./images/all-services.png";
interface AppProps {}

interface AppState {
  arabic: boolean;
}

class App extends Component<AppProps, AppState> {
  navArabicData: NavData;
  navEnglishData: NavData;
  carouselArabicData: CarouselData;
  carouselEnglishData: CarouselData;
  serviceTabsArabicData: ServiceTabsData[];
  serviceTabsEnglishData: ServiceTabsData[];
  individualServiceEnglishData: IndividualServiceData[];
  individualServiceArabicData: IndividualServiceData[];
  constructor(props: AppProps) {
    super(props);
    this.state = {
      arabic: false
    };
    this.navArabicData = {
      about: "عن المؤسسه",
      news: "الأخبار",
      services: "دليل الخدمات",
      library: "مكتبة المؤسسة",
      media: "المركز الإعلامي",
      support: " الدعم و المساندة"
    };

    this.navEnglishData = {
      about: "About Us",
      news: "News",
      services: "Services",
      library: "Founding Library",
      media: "Media Center",
      support: "Help and Support"
    };

    this.carouselArabicData = {
      title: "قصة اكتشاف “منصوراسوروس شاهينا” في مصر",
      description:
        "منصوراسوروس شاهينا هو سادس هيكل لديناصور يُكتشف في مصر حتى المنصوراسوروس شاهينا هو سادس هيكل لديناصور يُكتشف في مصر حتى ال",
      buttonText: "إقرأ المزيد"
    };

    this.carouselEnglishData = {
      title: "The Story of discovering Mansourasaurus",
      description:
        "Lorem ipsum dolor sit amet, ut duo mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi",
      buttonText: "Read More"
    };
    this.serviceTabsArabicData = [
      { title: "خدمات قطاع الأعمال", icon: businessImage, id: "business" },
      { title: "خدمات الأفراد", icon: individualsImage, id: "individual" },
      {
        title: "الخدمات الأكثر إستخداماً",
        icon: mostUsedImage,
        id: "mostUsed"
      },
      { title: "جميع خدمات", icon: allServicesImage, id: "allServices" },
      { title: "خدمات جديدة", icon: newServicesImage, id: "new-services" }
    ];
    this.serviceTabsEnglishData = [
      { title: "Business Services", icon: businessImage, id: "business" },
      {
        title: "Individual Services",
        icon: individualsImage,
        id: "individual"
      },
      { title: "Most Used Services", icon: mostUsedImage, id: "mostUsed" },
      { title: "All Services", icon: allServicesImage, id: "allServices" },
      { title: "New Services", icon: newServicesImage, id: "new-services" }
    ];
    this.individualServiceEnglishData = [
      {
        title: "(1) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(2) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(3) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(4) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(5) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(6) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(7) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(8) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(9) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      },
      {
        title: "(10) Lorem ipsum dolor sit amet, ut duo",
        description:
          "mundi gubergren dissentias case insolens patrioque ea per. Ad ius albucius referrentu interpretaris, vix at mucius tibique, ius porro eligendi"
      }
    ];

    this.individualServiceArabicData = [
      {
        title: "١ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "٢ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "٣ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "٤ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "٥ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "٦ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "٧ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "٨ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "٩ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      },
      {
        title: "١٠ نص لوريم إيبسوم القياسي والمستخدم",
        description:
          "لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس ا"
      }
    ];
  }

  /** A function Invoked to handle toggling language
   *
   * @param {}
   * @public
   */
  handleLanguageChange = () => {
    this.setState({
      arabic: !this.state.arabic
    });
  };
  render() {
    return (
      <div className="">
        <SubNav
          handleLanguageChange={() => {
            this.handleLanguageChange();
          }}
          language={this.state.arabic ? "EN" : "AR"}
          searchPlaceholder={this.state.arabic ? "البحث" : "Search"}
        />
        <Navbar
          navbarData={
            this.state.arabic ? this.navArabicData : this.navEnglishData
          }
          language={this.state.arabic ? "AR" : "EN"}
        />
        <Carousel
          carouselData={
            this.state.arabic
              ? this.carouselArabicData
              : this.carouselEnglishData
          }
        />
        <ServiceTabs
          headerTitle={this.state.arabic ? "فهرس الخدمات" : "Services Section"}
          headerBtn={this.state.arabic ? "جميع الخدمات" : "All Services"}
          tabsData={
            this.state.arabic
              ? this.serviceTabsArabicData.reverse()
              : this.serviceTabsEnglishData
          }
          individualServiceData={
            this.state.arabic
              ? this.individualServiceArabicData
              : this.individualServiceEnglishData
          }
          cardFooterText={this.state.arabic ? "إستفد من الخدمة" : "Use Service"}
          language={this.state.arabic ? "ar" : ""}
        />
      </div>
    );
  }
}

export default App;
