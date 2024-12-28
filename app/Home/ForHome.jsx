"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Button, Input } from "@material-tailwind/react";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: Infinity });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
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
      <div className="w-full  flex justify-center items-start lg:justify-evenly flex-col lg:flex-row  gap-x-4 lg:gap-x-0">
        <div className="w-full lg:w-[50%]  flex flex-col">
          <div className="flex flex-col">
            <div className="text-5xl mt-[3em] font-bold text-pink-500 flex flex-col gap-y-4">
              Let’s Build Something{" "}
              <h1 className="text-pink-700">Amazing With GPT-4 </h1>{" "}
              <h1 className="text-pink-900">OpenAI</h1>
            </div>
            <h2 className="text-2xl text-gray-500 mt-4">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </h2>
            <div className="relative flex w-full gap-2 md:w-max mt-4 ">
              <Input
                type="search"
                color="white"
                label="Your Email Address"
                className="pr-20 pl-[22em] "
                // containerProps={{
                //   className: "min-w-[550px]",
                // }}
              />
              <Button
                size="md"
                color="white"
                className="!absolute right-0 top-0 rounded"
              >
                Get Started
              </Button>
            </div>
            <div className="mt-4 flex  ">
              <div className="flex gap-x-2">
                <img
                  src="https://abdelghafourha.github.io/gpt-4/assets/people-JqyWIW5N.png"
                  alt=""
                  className="max-w-[29%] "
                />
                <h3 className="text-white flex justify-center items-center">
                  1,600 people requested access a visit in last 24 hours
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] ">
          <div className="w-full lg:w-[100%] mt-4 flex justify-center items-center">
            <img
              src="https://abdelghafourha.github.io/gpt-4/assets/header-H5BDBlsW.jpg"
              alt=""
              className="w-[60%] md:w-[60%] lg:w-[100%]  "
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ForHome;
