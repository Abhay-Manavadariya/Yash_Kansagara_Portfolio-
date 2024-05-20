"use client";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import PortfolioSlider from "./PortfolioSlider";
import PortfolioArea from "./PortfolioArea";
import BrandAreaAbout from "../about/BrandAreaAbout";
import FooterOne from "@/layouts/footers/FooterOne";

const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <PortfolioSlider />
            <PortfolioArea />
            {/* <BrandAreaAbout /> */}
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
