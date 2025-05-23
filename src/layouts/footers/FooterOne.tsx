"use client";
import React from "react";
import { CopyRight } from "@/components/common/SocialLinks";
import BehanceIconFooter from "@/svg/home/FooterIcons/BehanceIconFooter";
import GoogleIconFooter from "@/svg/home/FooterIcons/GoogleIconFooter";
import InstagramIconFooter from "@/svg/home/FooterIcons/InstagramIconFooter";
import Link from "next/link";
import HeroEmailIcon from "@/svg/home/HeroIcons/HeroEmailIcon";

interface DataType {
  title: string;
  title_2: JSX.Element;
  btn_text_1: string;
  btn_text_2: string;
  footer_data: {
    id: number;
    name: string;
    user_name: string;
    link: string;
    icon: React.JSX.Element;
  }[];
}

const footer_content: DataType = {
  title: "Let's talk about the next big thing",
  title_2: (
    <>
      Let's talk about <br /> the next big thing
    </>
  ),
  btn_text_1: "Send project requirements",
  btn_text_2: "Discuss Project",
  footer_data: [
    {
      id: 1,
      name: "Behance",
      user_name: "",
      icon: <BehanceIconFooter />,
      link: "",
    },
    {
      id: 2,
      name: "Email",
      user_name: "",
      icon: <HeroEmailIcon />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=mr.zenzee8@gmail.com",
    },
    // {
    //   id: 2,
    //   name: "Google",
    //   user_name: "",
    //   icon: <GoogleIconFooter />,
    //   link: "",
    // },
  ],
};

const { btn_text_1, btn_text_2, title_2, footer_data } = footer_content;

const FooterOne = ({ style }: any) => {
  const bg_img = style
    ? "/assets/img/footer/overly-bg-2.png"
    : "/assets/img/skill/bg-distort.png";

  return (
    <>
      <footer>
        <div
          className={`tp-footer-bg ${
            style
              ? "tp-footer__customize  theme-bg-2"
              : "tp-footer-bg-light theme-bg-2"
          } p-relative fix z-index-1`}
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          <div className="tp-footer-circle-1">
            <span></span>
          </div>
          <div className="tp-footer-circle-2">
            <span></span>
          </div>
          <div className="tp-footer-circle-3" data-speed=".7">
            <span></span>
          </div>
          <div
            className={`tp-footer-area ${
              style ? "tp-footer-inner__customize" : ""
            } pb-80 pt-120`}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-footer-content text-center">
                    <h3
                      className={`tp-footer-title ${
                        style ? "" : "big"
                      } tp_title_anim`}
                    >
                      {title_2}
                    </h3>
                  </div>
                </div>
              </div>
              {style ? (
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        <Link className="tp-btn-white-xl w-100" href="/contact">
                          <div>
                            <span>{btn_text_2}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center">
                        {/* <a
                          className="tp-btn-grey-xl w-100"
                          target="_blank"
                          href="https://forms.gle/H3mycp9tU6URvp2h6"
                        >
                          <div>
                            <span>Send project requirements</span>
                          </div>
                        </a> */}
                        <Link className="tp-btn-green w-100" href="/contact">
                          <div>
                            <span>{btn_text_1}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="tp-footer-btn-box">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        <Link className="tp-btn-white-xl w-100" href="/contact">
                          <div>
                            <span>{btn_text_2}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-btn text-center ">
                        {/* <a
                          className="tp-btn-green w-100"
                          target="_blank"
                          href="https://forms.gle/H3mycp9tU6URvp2h6"
                        >
                          <div>
                            <span>{btn_text_1}</span>
                          </div>
                        </a> */}
                        <Link className="tp-btn-green w-100" href="/contact">
                          <div>
                            <span>{btn_text_1}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="row gx-50" style={{ justifyContent: "center" }}>
                {footer_data.map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-4 col-lg-4 col-md-6"
                    style={{ marginBottom: "30px" }}
                  >
                    <a href={item.link} target="_blank">
                      <div className="tp-footer-social-item d-flex align-items-center justify-content-between">
                        <span className="tp-footer-anim-border"></span>
                        <div className="tp-footer-social-text z-index-1">
                          <span className="child-1">{item.name}</span>
                          {/* <span classNa;;p[me="child-2">{item.user_name}</span> */}
                        </div>
                        <div className="tp-footer-social-icon z-index-1">
                          <span>{item.icon}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tp-copyright-area pb-20">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-left text-center text-md-start">
                    <p>
                      <CopyRight />
                    </p>
                  </div>
                </div>
                {/* <div className="col-xl-6 col-md-6">
                  <div className="tp-copyright-content-right text-center text-md-end">
                    <span>{new Date().getFullYear()} Portfolio</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
