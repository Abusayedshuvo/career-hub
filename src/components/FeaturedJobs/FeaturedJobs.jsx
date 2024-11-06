import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJob] = useState([]);
  const [length, setLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  return (
    <div className="mt-32 px-20 2xl:px-40 3xl:px-72">
      <div className="text-center mb-8">
        <p className="text-5xl font-extrabold mb-4">Featured Jobs</p>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, length).map((job) => (
          <Job key={jobs.id} job={job}></Job>
        ))}
      </div>
      <div className={length === jobs.length ? "hidden" : "text-center mt-10"}>
        <button
          onClick={() => setLength(jobs.length)}
          className="bg-[#9873FF] px-5 py-3 rounded text-white text-[20px] font-extrabold"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
