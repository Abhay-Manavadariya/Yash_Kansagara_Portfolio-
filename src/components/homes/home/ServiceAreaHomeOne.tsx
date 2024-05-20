"use client";
import React, { useState } from "react";
import Image from "next/image";

import shape_1 from "@/assets/img/services/shape/services-shape-1.png";
import shape_2 from "@/assets/img/services/shape/services-shape-2.png";

const service_content = {
  subtitle: "Services",
  title: (
    <>
      Solution <br /> we provide.
    </>
  ),
  sm_des: <>One Stop Shop For All Your Digital Needs.</>,
  accordion_data: [
    {
      id: 1,
      tab_id: "One",
      question: "Logo Design",
      answer:
        "Design is the silent ambassador of your brand. Minimal logo design can have a high visual impact and is easy to remember for your customers. Are you looking for a clever and storytelling logo? Look no further!",
      some_features: [],
    },
    {
      id: 2,
      tab_id: "Two",
      question: "Branding",
      answer:
        "Elevate your brand identity and establish a cohesive, memorable, and professional presence with our Brand Style Guide Creation service. A meticulously crafted brand style guide is the cornerstone of successful branding, enabling your business to communicate its essence consistently, regardless of the medium or platform.",
      some_features: [],
    },
    {
      id: 3,
      tab_id: "Three",
      question: "UI/UX Design",
      answer:
        "where we don't just create interfaces; we craft digital experiences that resonate with your brand's soul. Our UI services are an alchemy of creativity and functionality, delivering not just visuals but a journey that users won't forget.",
      some_features: [],
    },
    {
      id: 4,
      tab_id: "Four",
      question: "Website Design",
      answer:
        "Get a website that doesn't just look nice. Its a conversion powerhouse--designed to turn casual visitors into paying customers. From seamless navigation, bold layouts, irresistible calls-to-action, and an intuitive user journey, every element is meticulously designed to enhance user engagement and drive business growth",
      some_features: [],
    },
  ],
};

const { subtitle, title, sm_des, accordion_data } = service_content;

const ServiceAreaHomeOne = () => {
  const [active, setActive] = useState(1);

  const handleItemClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <section
        className="tp-services-area tp-sv tp-services-bg-text-animation fix"
        id="tp-sv"
      >
        <div className="container container-large">
          <div className="tp-services-inner pb-195 p-relative z-index-1">
            <span className="tp-services-inner-border tp-vertical-line transition-3"></span>
            <span className="tp-services-inner-border right tp-vertical-line transition-3"></span>

            <div className="tp-services-bottom-text tp-services-bg-text">
              <p style={{opacity:"0.15"}}>Services</p>
            </div>
            <div className="row gx-0">
              <div className="col-xl-6 col-lg-7">
                <div
                  className="tp-services-wrapper tp-services-capsule-wrapper p-relative pt-100 pr-70"
                  style={{ paddingTop: "50px" }}
                  data-tp-throwable-scene="true"
                >
                  <div className="tp-section-title-wrapper tp_text_anim mb-170">
                    <div className="tp-section-title-inner p-relative">
                      <span className="tp-section-subtitle">{subtitle}</span>
                      <h3 className="tp-section-title tp_title_anim">
                        {title}
                      </h3>
                    </div>
                    <p>{sm_des}</p>
                  </div>

                  <div className="tp-services-capsule-item-wrapper">
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#00CC97" }}
                      >
                        Frontend Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FF759C" }}
                      >
                        Prototype
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FFDB59", color: "#121212" }}
                      >
                        Design solutions
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FFDB59", color: "#121212" }}
                      >
                        Stationary Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#00CC97" }}
                      >
                        Brand strategy
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FFDB59", color: "#121212" }}
                      >
                        Mascot Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#00CC97" }}
                      >
                        Logo Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#00CC97" }}
                      >
                        Social Media Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#19B3F1" }}
                      >
                        UI/UX Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FF759C" }}
                      >
                        Brand Identity Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FFDB59", color: "#121212" }}
                      >
                        Testing
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#FF759C" }}
                      >
                        Web Development
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#19B3F1" }}
                      >
                        web & App Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span
                        className="tp-services-capsule-item"
                        style={{ backgroundColor: "#19B3F1" }}
                      >
                        Brochure Design
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_1} alt="brand-img" />
                      </span>
                    </p>
                    <p data-tp-throwable-el="">
                      <span className="">
                        <Image src={shape_2} alt="brand-img" />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5">
                <div
                  className="tp-services-accordion tp-accordion tp-accordion-2 pl-70 p-relative"
                  style={{ marginTop: "90px" }}
                >
                  <span className="tp-services-accordion-border"></span>
                  <div className="accordion" id="accordionExample">
                    {accordion_data.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => handleItemClick(i)}
                        className={`accordion-item tp-services-accordion-item ${
                          active === i ? "active" : ""
                        }`}
                      >
                        <h2
                          className="accordion-header"
                          id={`heading${item.tab_id}`}
                        >
                          <button
                            className={`accordion-button ${
                              i === 1 ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.tab_id}`}
                            aria-expanded={`${i === 1 ? "true" : "false"}`}
                            aria-controls={`collapse${item.tab_id}`}
                            tabIndex={0}
                          >
                            {/* <span>{item.id}</span> */}
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${item.tab_id}`}
                          className={`accordion-collapse collapse ${
                            i === 1 ? "show" : ""
                          }`}
                          aria-labelledby={`heading${item.tab_id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            className="accordion-body"
                            style={{
                              paddingLeft: "0",
                              paddingRight: "0",
                            }}
                          >
                            <p style={{ fontSize: "1.25rem" }}>
                              {item.answer}
                            </p>
                            <ul>
                              {item.some_features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <span className="accordion-item-border"></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;
