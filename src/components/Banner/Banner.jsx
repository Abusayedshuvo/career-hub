import bannerImg from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="grid xl:grid-cols-2 px-20 2xl:px-40 3xl:px-72">
      <div className="my-auto">
        <h1 className="text-7xl 3xl:text-[80px] font-extrabold leading-[85px] mb-5">
          One Step Closer To Your <br />
          <span className="text-[#7E90FE]"> Dream Job </span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <div className="mt-10">
          <button className="bg-[#9873FF] px-5 py-3 rounded text-white text-[20px] font-extrabold">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <img src={bannerImg} alt="user" />
      </div>
    </div>
  );
};

export default Banner;
