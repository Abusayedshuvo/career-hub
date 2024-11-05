import PropTypes from "prop-types";
import { AiOutlineDollar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

const AppliedJob = ({ job }) => {
  const {
    logo,
    company_name,
    salary,
    job_title,
    remote_or_onsite,
    job_type,
    location,
  } = job;
  return (
    <div className="border border-[#E8E8E8] p-[30px] rounded-lg flex gap-10 mb-6">
      <div className="bg-[#F4F4F4] rounded-lg w-60 h-60 flex items-center justify-center p-6">
        <img src={logo} alt="" />
      </div>
      <div>
        <p className="text-2xl mb-2 text-[#474747] font-extrabold">
          {job_title}
        </p>
        <p className="text-[#757575] text-2xl"> {company_name} </p>

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
      </div>
      <div className="ml-auto my-auto">
        <button className="bg-[#9873FF] px-5 py-3 rounded text-white text-[20px] font-extrabold">
          Get Started
        </button>
      </div>
    </div>
  );
};

AppliedJob.propTypes = {
  job: PropTypes.object,
};

export default AppliedJob;
