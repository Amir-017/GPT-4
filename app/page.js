import React from "react";
import Home from "./Home/page";
import Gpt4 from "./gpt4/page";
import CaseStudies from "./caseStudies/page";
import OpenAi from "./openAi/page";
import Library from "./library/page";
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
