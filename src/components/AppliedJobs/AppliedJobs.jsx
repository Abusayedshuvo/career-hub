import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreJob } from "../../utility/localstorage";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobs = getStoreJob();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobs.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <div className="bg-[#9873FF]/5 py-36">
        <p className="text-center font-extrabold text-4xl">Applied Jobs</p>
      </div>
      <div className="px-[300px] mt-[200px]">
        <div className="text-right mb-8">
          <details className="dropdown">
            <summary className="btn m-1">Filter By</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow right-000000">
              <li onClick={() => handleFilter("all")}>
                <a>All</a>
              </li>
              <li onClick={() => handleFilter("remote")}>
                <a>Remote</a>
              </li>
              <li onClick={() => handleFilter("onsite")}>
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
        {displayJobs.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
