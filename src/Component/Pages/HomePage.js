import React from "react";
import Header from "./Header";
import ExploreJobs from "./ExploreJobs";
import TechnologyWiseJobs from "./TechnologyWiseJobs";
import LocationWiseJobs from "./LocationWiseJobs";
import BasicInformation from "./BasicInformation";

const HomePage = () => {
  return (
    <div className="px-4 py-3 bg-slate-800">
      <Header />
      <ExploreJobs />
      <BasicInformation/>
      <TechnologyWiseJobs />
      <LocationWiseJobs/>
    </div>
  );
};

export default HomePage;
