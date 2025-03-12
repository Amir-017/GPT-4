"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import ai from "../../Assets/posibility-60y34owm.png";
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
const ForAi = () => {
  return (
    <Section>
      <div className="w-full  flex flex-col md:flex-row gap-x-5 mt-10 justify-center items-center ">
        <div className="w-full  lg:w-[50%] flex justify-center items-center">
          <Image src={ai} alt="ai" className="w-full" priority={true} />
        </div>
        <div className="w-full  lg:w-[50%] flex flex-col gap-y-[3em] items-center md:items-start justify-center mt-20">
          <h1 className="font-bold text-white">
            Request Early Access to Get Started
          </h1>
          <div className="text-4xl font-bold">
            <h1 className="bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-4xl  text-transparent  text-center md:text-start">
              The possibilities are beyond your imagination
            </h1>
          </div>
          <p className="text-cyan-100 text-center md:text-start">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
      </div>
      ;
      <div className="mt-20 w-full   bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl text-black flex flex-col lg:flex-row justify-between items-center">
        <div className="p-10">
          <p>Request Early Access to Get Started</p>
          <h1 className="text-3xl font-bold">
            Register today & start exploring the endless possiblities.
          </h1>
        </div>
        <button className="bg-gradient-to-r from-black to-black text-white rounded-xl p-2 mt-2 mb-2 me-2">
          Get Started
        </button>
      </div>
    </Section>
  );
};

export default ForAi;
