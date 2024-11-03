import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJob] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  return (
    <div className="mt-32 px-20 2xl:px-[300px]">
      <div className="text-center mb-8">
        <p className="text-5xl font-extrabold mb-4">
          FeaturedJobs: {jobs.length}
        </p>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Job key={jobs.id} job={job}></Job>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="bg-[#9873FF] px-5 py-3 rounded text-white text-[20px] font-extrabold">
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
