"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
// import "../styles.css";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
const ForGpt4 = () => {
  return (
    <Section>
      <div className="w-full  flex justify-center    ">
        <div className="w-full lg:w-[90%] mt-10 bg-[#1A212C] rounded-[2.5rem] p-10 border-2 border-blue-500 border-t-blue-500">
          <div className="w-full flex flex-col md:flex-row justify-center lg:justify-between items-center ">
            <div className="w-[40%] flex flex-col ">
              <h1 className="capitalize text-2xl font-bold text-white me-0 lg:me-6 ">
                what is chat gpt-4
              </h1>
              <div className="w-[42%] h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
            </div>
            <div className=" w-full lg:w-[60%]">
              <p className="text-cyan-200  mt-5">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
          </div>
          {/* //////////////// */}
          <div className="w-full flex justify-between items-center mt-20 flex-col md:flex-row">
            <div className="w-full lg:w-[50%] flex flex-col ">
              <h1 className="w-full capitalize text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-pink-400">
                The possibilities are beyond your imagination
              </h1>
              <div className="w-[76%] h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"></div>
            </div>
            <div className="w-full lg:w-[40%] text-end cursor-pointer">
              <p className="text-cyan-200  mt-5 capitalize text-center lg:text-end">
                Explore The Library
              </p>
            </div>
          </div>
          {/* //////////////// */}
          <div className="w-full flex justify-center lg:justify-between items-center mt-20 flex-col md:flex-row">
            <div className="w-[40%] flex flex-col ">
              <h1 className="capitalize text-2xl font-bold text-white text-start">
                Chatbots
              </h1>
              <div className="w-[20%] h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
            </div>
            <div className="w-full lg:w-[60%]">
              <p className="text-cyan-200  mt-5">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
          </div>
          {/* //////////////// */}
          <div className="w-full flex justify-between items-center mt-20 flex-col md:flex-row">
            <div className="w-[40%] flex flex-col ">
              <h1 className="capitalize text-2xl font-bold text-white me-2 lg:me-6">
                Knowledgebase
              </h1>
              <div className="w-[35%] h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
            </div>
            <div className="w-full lg:w-[60%]">
              <p className="text-cyan-200  mt-5">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
          </div>
          {/* //////////////// */}
          <div className="w-full flex justify-between items-center mt-20 flex-col md:flex-row">
            <div className="w-[40%] flex flex-col ">
              <h1 className="capitalize text-2xl font-bold text-white">
                Education
              </h1>
              <div className="w-[22%] h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl"></div>
            </div>
            <div className="w-full lg:w-[60%]">
              <p className="text-cyan-200  mt-5">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ForGpt4;
