import React from "react";
import ForLib from "./ForLib";

const page = () => {
  return (
    <div>
      <div className="text-4xl font-extrabold  mt-20 mb-10 text-center">
        <span className="bg-clip-text bg-cover  text-transparent bg-gradient-to-r from-pink-500 to-pink-300">
          A lot is happening, We are blogging about it.
        </span>
      </div>
      <ForLib />
    </div>
  );
};

export default page;
