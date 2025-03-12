import React from "react";
import Home from "./home";
import Gpt4 from "./gpt4";
import CaseStudies from "./caseStudies";
import OpenAi from "./openAi";
import Library from "./library";
const page = () => {
  return (
    <div className="container mx-auto">
      <Home />
      <Gpt4 />
      <CaseStudies />
      <OpenAi />
      <Library />
    </div>
  );
};

export default page;
