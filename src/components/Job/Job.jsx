import PropTypes from "prop-types";
import { AiOutlineDollar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="border-[#E8E8E8] border p-10 rounded-lg">
      <img src={logo} alt="" />{" "}
      <p className="text-2xl font-extrabold mt-8 mb-2">{job_title}</p>
      <p className="text-[#757575] font-semibold">{company_name}</p>
      <div className="flex gap-4 mt-4">
        <span className="text-[#9873FF] border border-[#9873FF] px-5 py-3 rounded font-extrabold">
          {remote_or_onsite}
        </span>
        <span className="text-[#9873FF] border border-[#9873FF] px-5 py-3 rounded font-extrabold">
          {job_type}
        </span>
      </div>
      <div className="mt-4 mb-6 flex gap-6">
        <div className="text-[#757575] text-[20px] flex gap-2 items-center">
          <GrLocation></GrLocation>
          <p className="  font-semibold">{location}</p>
        </div>
        <div className="text-[#757575] text-[20px] flex gap-2 items-center">
          <AiOutlineDollar></AiOutlineDollar>
          <p className="  font-semibold">{salary}</p>
        </div>
      </div>
      <Link>
        <button className="bg-[#9873FF] px-5 py-3 rounded text-white text-[20px] font-extrabold">
          View Details
        </button>
      </Link>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
