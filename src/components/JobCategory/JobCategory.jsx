import { useEffect, useState } from "react";
import Category from "./Category";

const JobCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="mt-32 px-20 2xl:px-40 3xl:px-72">
      <div className="text-center mb-8">
        <p className="text-5xl font-extrabold mb-4">Job Category List</p>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid  grid-cols-2 2xl:grid-cols-4 gap-6">
        {category.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
