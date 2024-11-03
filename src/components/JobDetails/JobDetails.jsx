import { AiOutlineDollar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  return (
    <div className="">
      <div className="bg-[#9873FF]/5 py-36">
        <p className="text-center font-extrabold text-4xl">Job Details</p>
      </div>

      <div className="mt-[130px] px-[200px] grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <p className="pb-6">
            <b>Job Description:</b>
            {job_description}
          </p>
          <p className="pb-6">
            <b>Job Responsibility:</b>
            {job_responsibility}
          </p>
          <p className="pb-6">
            <b>Educational Requirements:</b>
            <br />
            <br />
            {educational_requirements}
          </p>
          <p className="pb-6">
            <b>Experiences:</b>
            <br />
            <br />
            {experiences}
          </p>
        </div>
        <div>
          <div className="bg-[#9873FF]/10 p-8 rounded-lg">
            <p className="text-lg font-extrabold">Job Details</p>
            <hr className="my-6" />
            <div className="mb-4 flex text-[20px] items-center gap-2">
              <AiOutlineDollar className="text-[#9873FF]"></AiOutlineDollar>
              <p className=" text-[#757575]">
                <span className="font-bold text-[#474747]">Salary : </span>
                {salary}
              </p>
            </div>
            <div className="mb-4 flex text-[20px] items-center gap-2">
              <IoCalendarOutline className="text-[#9873FF]"></IoCalendarOutline>
              <p className=" text-[#757575]">
                <span className="font-bold text-[#474747]">Job Title : </span>
                {job_title}
              </p>
            </div>
            <p className="text-lg font-extrabold">Contact Information</p>
            <hr className="my-6" />
            <div className="mb-4 flex text-[20px] items-center gap-2">
              <MdOutlineLocalPhone className="text-[#9873FF]"></MdOutlineLocalPhone>
              <p className=" text-[#757575]">
                <span className="font-bold text-[#474747]">Phone : </span>
                {contact_information.phone}
              </p>
            </div>
            <div className="mb-4 flex text-[20px] items-center gap-2">
              <MdOutlineMailOutline className="text-[#9873FF]"></MdOutlineMailOutline>
              <p className=" text-[#757575]">
                <span className="font-bold text-[#474747]">Email : </span>
                {contact_information.email}
              </p>
            </div>
            <div className="mb-4 flex text-[20px] items-center gap-2">
              <GrLocation className="text-[#9873FF] text-[20px]"></GrLocation>
              <p className=" text-[#757575]">
                <span className="font-bold text-[#474747]">Address : </span>
                {contact_information.address}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/">
              <button className="bg-[#9873FF] px-5 py-3 rounded-lg text-white text-[20px] font-extrabold w-full">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
