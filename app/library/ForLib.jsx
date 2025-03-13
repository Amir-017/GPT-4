"use client";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import img1 from "../../Assets/blog01-DXnRQkOd.png";
import img2 from "../../Assets/blog02-BWZlz874.png";
import img3 from "../../Assets/blog03-CqlYfwd2.png";
import img4 from "../../Assets/blog04-Cp2ZNROS.png";
import img5 from "../../Assets/blog04-Cp2ZNROS.png";
import Image from "next/image";
function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}
const ForLib = () => {
  return (
    <Section>
      <div className="w-full flex gap-10 flex-col lg:flex-row justify-center items-center">
        <div className="w-[60%] lg:w-[40%] ">
          <Card className="mt-6  lg:h-[37em]  bg-blue-gray-900">
            <CardHeader color="blue-gray" className="relative ">
              <Image
                src={img1}
                alt="card-image"
                priority={true}
                className="w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="white"
                className="mb-2 text-semibold text-white"
              >
                Sep 26, 2022
              </Typography>
              <Typography className="text-white my-[3em]">
                GPT-4 and Open AI is the future. Let us exlore how it is?
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 ">
              <Button className="readFull">Read Full Artical</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-[60%] flex flex-col justify-center items-center gap-4   ">
          <div className="flex flex-col lg:flex-row gap-4">
            <Card className="mt-6  bg-blue-gray-900 w-full lg:w-[70%]">
              <CardHeader color="blue-gray" className="relative ">
                <Image
                  src={img2}
                  alt="card-image"
                  priority={true}
                  className="max-w-[145%]"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 text-semibold text-white"
                >
                  Sep 26, 2022
                </Typography>
                <Typography className="text-white">
                  GPT-4 and Open AI is the future. Let us exlore how it is?
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="readFull">Read Full Artical</Button>
              </CardFooter>
            </Card>{" "}
            <Card className="mt-6  bg-blue-gray-900">
              <CardHeader color="blue-gray" className="relative ">
                <Image
                  src={img3}
                  alt="card-image"
                  priority={true}
                  className="w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 text-semibold text-white"
                >
                  Sep 26, 2022
                </Typography>
                <Typography className="text-white">
                  GPT-4 and Open AI is the future. Let us exlore how it is?
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="readFull">Read Full Artical</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            <Card className="mt-6  bg-blue-gray-900">
              <CardHeader color="blue-gray" className="relative ">
                <Image
                  src={img4}
                  alt="card-image"
                  priority={true}
                  className="w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 text-semibold text-white"
                >
                  Sep 26, 2022
                </Typography>
                <Typography className="text-white">
                  GPT-4 and Open AI is the future. Let us exlore how it is?
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="readFull">Read Full Artical</Button>
              </CardFooter>
            </Card>{" "}
            <Card className="mt-6  bg-blue-gray-900">
              <CardHeader color="blue-gray" className="relative ">
                <Image
                  src={img5}
                  alt="card-image"
                  priority={true}
                  className="w-full"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="white"
                  className="mb-2 text-semibold text-white"
                >
                  Sep 26, 2022
                </Typography>
                <Typography className="text-white">
                  GPT-4 and Open AI is the future. Let us exlore how it is?
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="readFull">Read Full Artical</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      ;
    </Section>
  );
};

export default ForLib;
