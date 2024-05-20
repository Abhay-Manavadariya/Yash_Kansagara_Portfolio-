import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import SeviceHeroArea from './SeviceHeroArea';
import ServiceAreaHomeThree from '../homes/home-3/ServiceAreaHomeThree';
import ServiceInfoArea from './ServiceInfoArea';
import TestimonialAreaHomeOne from '../homes/home/TestimonialAreaHomeOne';
import PriceAreaHomeOne from '../homes/home/PriceAreaHomeOne';
import BrandAreaAbout from '../about/BrandAreaAbout';
import FooterOne from '@/layouts/footers/FooterOne';


const Service = () => {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <SeviceHeroArea />
            <ServiceAreaHomeThree style={true} />
            <ServiceInfoArea />
            <TestimonialAreaHomeOne style={true} />
            <PriceAreaHomeOne style={true} />
            {/* <BrandAreaAbout /> */}
          </main>
          <FooterOne style={true} />
        </div>
      </div>
    </>
  );
};

export default Service;