import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";
import React from "react";
import Image from "next/image";
import HeroHand from "@/assets/img/hero/hero-hand.png";

export const metadata = {
  title: "Mr.Zenzee",
};

const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;