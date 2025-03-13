"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import google from "../../Assets/google-DwwFqmoU.png";
import dropbox from "../../Assets/dropbox-Dnb3pCxl.png";
import atlassian from "../../Assets/atlassian-CXHbA7H6.png";
import shopify from "../../Assets/shopify-DadwHld1.png";
import slack from "../../Assets/slack-Cr3-Yo9d.png";
import "../styles.css";
// import Footer from "@/components/Footer";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: Infinity });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all .9s cubic-bezier(0.17, 0.55, 0.55, 1) .5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
const ForHome = () => {
  return (
    <Section>
      {" "}
      <div className="flex flex-col w-full items-center justify-center gap-y-10">
        <div className="w-full ms-5 lg:ms-0 flex justify-evenly flex-col lg:flex-row  gap-x-4 lg:gap-x-0 ">
          <div className="w-full lg:w-[50%]   flex flex-col ">
            <div className="flex flex-col justify-center items-center gap-y-4">
              <div className="text-center md:text-start text-5xl mt-[3em] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-gray-500">
                Let's Build Something Amazing With GPT-4 OpenAI
                {/* <h1 className="text-pink-700"> </h1>{" "}
                <h1 className="text-pink-900"></h1> */}
              </div>
              <h2 className="text-2xl text-gray-500 my-[1em]">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </h2>
              {/* <div className="w-full  relative flex justify-center items-center   mt-4   ">
                <Input
                  type="search"
                  color="white"
                  label="Your Email Address  "
                  className=""
                  // containerProps={{
                  //   className: "",
                  // }}
                />
                <Button
                  size="md"
                  color="white"
                  className="!absolute right-0 top-0 rounded hidden md:block"
                >
                  Get Started
                </Button>
              </div>
              <div className="w-full block md:hidden">
                <Button
                  size="md"
                  color="white"
                  className=" right-0 top-0 rounded"
                >
                  Get Started
                </Button>
              </div> */}
              <div className="relative flex w-full me-[20px] lg:me-0">
                <Input
                  type="email"
                  label="Email Address"
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <Button
                  size="sm"
                  className="!absolute right-1 top-1 rounded font-extrabold text-black hidden md:block"
                >
                  Get Started
                </Button>
              </div>
              <div className="w-full justify-start block md:hidden">
                <Button
                  size="sm"
                  color="white"
                  className=" right-0 top-0 rounded font-extrabold text-black"
                >
                  Get Started
                </Button>
              </div>

              <div className="mt-4 w-full flex justify-center items-center flex-col gap-y-4 lg:flex-row  lg:gap-y-0">
                <div className="w-full lg:w-[30%] flex justify-center items-center">
                  <img
                    src="https://abdelghafourha.github.io/gpt-4/assets/people-JqyWIW5N.png"
                    alt=""
                    className="w-[60%] md:w-[40%] lg:w-full "
                  />
                </div>
                <div className=" w-full lg:w-[70%] ms-1">
                  <h3 className="text-gray-500 flex justify-center items-center w-full">
                    1,600 people requested access a visit in last 24 hours
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-center items-center lg:h-[91vh]">
            <div className="w-full  mt-4 flex justify-center items-center">
              <img
                src="https://abdelghafourha.github.io/gpt-4/assets/header-H5BDBlsW.jpg"
                alt=""
                className="w-[60%] md:w-[60%] lg:w-[80%]  "
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-y-5 md:gap-y-0 justify-center items-center gap-x-16">
          <Image
            className="w-[20%] md:w-[15%] lg:w-[9%]"
            src={google}
            alt="Picture of the autho"
          />
          <Image
            src={atlassian}
            className="w-[20%] md:w-[15%] lg:w-[9%]"
            alt="Picture of the authr"
          />{" "}
          <Image
            src={dropbox}
            className="w-[20%] md:w-[15%] lg:w-[9%]"
            alt="Picture of the autor"
          />{" "}
          <Image
            src={shopify}
            className="w-[20%] md:w-[15%] lg:w-[9%]"
            alt="Picture of the auhor"
          />{" "}
          <Image
            src={slack}
            className="w-[20%] md:w-[15%] lg:w-[9%]"
            alt="Picture of the athor"
          />
        </div>
      </div>
    </Section>
  );
};

export default ForHome;
