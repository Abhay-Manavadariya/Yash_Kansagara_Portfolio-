"use client";
import React from "react";
import NiceSelect from "@/ui/NiceSelect";

import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message"),
  })
  .required();

const ContactFormHomeTwo = () => {
  const selectHandler = (e: any) => {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const onSubmit = (data: FormData) => {
    const notify = () => toast("Message send successful");
    notify();
    reset();
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="tp-contact-2__input">
              <input
                className="input-field"
                type="text"
                placeholder="Your Name"
                {...register("name")}
              />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.name?.message}</p>
          </div>
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="tp-contact-2__input">
              <input
                className="input-field"
                type="text"
                placeholder="Your Email"
                {...register("email")}
              />
              <span className="focus-border"></span>
            </div>
            <p className="form_error">{errors.email?.message}</p>
          </div>
          <div className="col-xl-4 col-lg-4 mb-50">
            <div className="tp-contact-2__select">
              <NiceSelect
                className="input-field"
                options={[
                  { value: "branding", text: "Branding" },
                  { value: "web_design", text: "Web Design" },
                  { value: "app_design", text: "App Design" },
                  { value: "logo", text: "Logo" },
                  { value: "digital_marketing", text: "Digital Marketing" },
                  { value: "android_development", text: "Android Development" },
                  { value: "iso_development", text: "iOS Development" },
                  { value: "design_concept", text: "Design Concept" },
                  { value: "other", text: "Other" },
                ]}
                defaultCurrent={10}
                onChange={selectHandler}
                name=""
                placeholder="I'm interested in..."
              />
              <span className="focus-border"></span>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-2__textarea">
              <textarea
                className="input-field"
                placeholder="Your message here..."
                {...register("message")}
              ></textarea>
              <span className="focus-border"></span>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-2__btn text-center ">
              <div className="parallax-wrap d-inline-block">
                <div className="parallax-element">
                  <button
                    className="tp-btn-pink-large"
                    type="submit"
                    style={{
                      background: "var(--tp-common-white)",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    <span data-hover="Send Message">Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactFormHomeTwo;
