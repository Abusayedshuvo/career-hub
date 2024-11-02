import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-5xl font-semibold">Oops!</h2>
      <br />
      <br />
      <Link to="/">
        <button className="btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default Error;
