import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import HeroAreaAbout from "./HeroAreaAbout";
import AboutInfo from "./AboutInfo";
import PersonalInfo from "./PersonalInfo";
import FunfactArea from "./FunfactArea";
import AwardAreaHomeOne from "../homes/home/AwardAreaHomeOne";
import BrandAreaAbout from "./BrandAreaAbout";
import FooterFour from "@/layouts/footers/FooterFour";

const About = () => {
  return (
    <>
      <HeaderOne />
      <div
        id="smooth-wrapper"
        // className="black-bg-3"
        className="tp-page-wrapper theme-bg"
        style={{ backgroundImage: `url(/assets/img/bg/distort-bg.png)` }}
      >
        <div id="smooth-content">
          <main>
            <HeroAreaAbout />
            <AboutInfo />
            <PersonalInfo />
            <FunfactArea />
            {/* <AwardAreaHomeOne style_2={true} /> */}
            {/* <BrandAreaAbout /> */}
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default About;
