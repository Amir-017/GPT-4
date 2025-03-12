"use client";
import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FaBrain } from "react-icons/fa6";
import Link from "next/link";
// import "globals.css";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          HOME
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/gpt4"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          WHAT IS CHAT GPT4
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/openAi"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          OPENAI
        </Link>
      </Typography>{" "}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/caseStudies"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          CASE STUDIES
        </Link>
      </Typography>{" "}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <Link
          href="/library"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          LIBRARY
        </Link>
      </Typography>
    </ul>
  );
}
const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Section>
      <Navbar className="mt-5 sticky top-0  z-10  !border-0 mx-auto max-w-screen-3xl px-6 py-3   !bg-transparent ">
        <div className="flex items-center justify-between text-white ">
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-medium"
          >
            <Link
              href="/"
              className="flex font-bold text-2xl items-center cursor-pointer transition-colors text-white"
            >
              GPT-4 <FaBrain className="ps-1  text-cyan-200" />
            </Link>
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </Section>
  );
};

export default Header;
