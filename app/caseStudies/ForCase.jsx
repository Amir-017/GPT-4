"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

// import "globals.css";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
const ForCase = () => {
  return (
    <Section>
      <div className="w-full  mt-10  flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-center items-center gap-x-10 container mx-0">
        <div className="w-full lg:w-[30%] flex flex-col gap-y-5">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-red-500 bg-gradient-to-r from-sky-500 to-indigo-500 text-center md:text-start">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <h3 className="text-brown-500 text-center lg:text-start">
            Request Early Access to Get Started.
          </h3>
        </div>
        <div className="w-full lg:w-[70%] ">
          <div className="w-full flex flex-col md:flex-row justify-center lg:justify-between items-center ">
            <div className="w-[40%] flex flex-col ">
              <h1 className="capitalize text-xl font-bold text-white me-0 lg:me-6 text-center flex justify-center">
                Improving end distrusts instantly
              </h1>
              <div className="w-[90%] ms-1  flex   h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
            </div>
            <div className=" w-full lg:w-[60%] ps-10">
              <p className="text-cyan-200  mt-5">
                instantly From they fine john he give of rich he. They age and
                draw mrs like. Improving end distrusts may instantly was
                household applauded.
              </p>
            </div>
          </div>
          {/* //////////////// */}
          <div className="w-full flex flex-col md:flex-row justify-center lg:justify-between items-center mt-20">
            <div className="w-[40%] flex flex-col ">
              <h1 className="capitalize text-xl font-bold text-white me-0 lg:me-0  flex justify-center">
                Become the tended active
              </h1>
              <div className="flex justify-start md:justify-center  h-1">
                <div className="w-[75%]   bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
              </div>
            </div>
            <div className=" w-full lg:w-[60%] ps-10">
              <p className="text-cyan-200  mt-5">
                Considered sympathize ten uncommonly occasional assistance
                sufficient not. Letter of on become he tended active enable to.
              </p>
            </div>
          </div>
          {/* //////////////// */}
          <div className="w-full flex flex-col md:flex-row justify-center lg:justify-between items-center mt-20">
            <div className="w-[40%] flex flex-col ">
              <h1 className="capitalize text-xl font-bold text-white  flex justify-start md:justify-center">
                Message or am nothing
              </h1>
              <div className="flex justify-start md:justify-center ">
                <div className="w-[68%]    h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
              </div>
            </div>
            <div className=" w-full lg:w-[60%] ps-10">
              <p className="text-cyan-200  mt-5">
                Led ask possible mistress relation elegance eat likewise
                debating. By message or am nothing amongst chiefly address.
              </p>
            </div>
          </div>
          {/* //////////////// */}
          <div className="w-full flex flex-col md:flex-row justify-center lg:justify-between items-center mt-20">
            <div className="w-[40%] flex flex-col ">
              <h1 className="capitalize text-xl font-bold text-white  text-center flex justify-center">
                Really boy law county
              </h1>
              <div className=" flex justify-center">
                <div className="w-[65%]    h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
              </div>
            </div>
            <div className=" w-full lg:w-[60%] ps-10">
              <p className="text-cyan-200  mt-5">
                Really boy law county she unable her sister. Feet you off its
                like like six. Among sex are leave law built now. In built table
                in an rapid blush.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ForCase;
