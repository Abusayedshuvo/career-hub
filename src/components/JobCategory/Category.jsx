import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="bg-[#9873FF]/5 rounded-lg p-10">
      <div className="bg-[#9873FF]/5 rounded-lg p-4 inline-block mb-8">
        <img src={logo} alt="" />
      </div>
      <p className="text-[#474747] text-[20px] font-extrabold">
        {category_name}
      </p>
      <p className="text-[#A3A3A3]">{availability}</p>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
