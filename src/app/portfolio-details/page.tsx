import PortfolioDetails from "@/components/portfolio-details";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title:
    "Mr.Zenzee",
};

const index = () => {
  return (
    <Wrapper>
      <PortfolioDetails />
    </Wrapper>
  );
};

export default index;
