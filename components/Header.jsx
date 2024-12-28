"use client";
import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "../app/styles.css";

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
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex font-bold text-2xl items-center cursor-pointer transition-colors text-white"
        >
          GPT-4
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          HOME
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          WHAT IS CHAT GPT4
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          OPENAI
        </a>
      </Typography>{" "}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          CASE STUDIES
        </a>
      </Typography>{" "}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="flex items-center text-[1.1rem] hover:text-cyan-200 transition-colors text-white"
        >
          LIBRARY
        </a>
      </Typography>
    </ul>
  );
}
const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Section>
      <Navbar className="sticky top-0  z-10 mt-5 !border-0 mx-auto max-w-screen-3xl px-6 py-3   !bg-transparent ">
        <div className="flex items-center justify-between text-white flex-row-reverse">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 flex gap-x-3"
          >
            <Button color="blue">Log IN</Button>
            <Button color="black">Sign Up</Button>
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
