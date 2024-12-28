import React from "react";
import PostYourResume from "../Form/PostYourResume";

const ExploreJobs = () => {
  return (
    <div className="w-full flex py-4  flex-wrap md:flex-nowrap gap-3 justify-between">
      <div className="shadow-custom border w-full  px-2 py-2 bg-white divide-y-2 rounded-md">
        <h2 className="font-semibold ">Explore Jobs</h2>
        <div className="flex md:flex-nowrap flex-wrap justify-between box-content p-3">
          <div className="flex md:flex-nowrap flex-wrap ">
          <img
            src="/images/fresher.jpeg"
            className="md:w-36 w-full md:h-28 h-[20rem] border-none rounded-3xl"
            alt="logo"
          />
          <img
            src="/images/experienced.jpeg"
            className="md:w-36 w-full md:h-28 h-[20rem] border-none rounded-3xl"
            alt="logo"
          />
          </div>
          <PostYourResume/>
        </div>
      </div>
    </div>
  );
};

export default ExploreJobs;
