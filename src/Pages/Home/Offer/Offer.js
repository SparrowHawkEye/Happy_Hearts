import React from "react";

const Offer = (props) => {
  const { img, name, description } = props.offer;
  return (
    <div className=" hover:shadow-lg transition-all delay-100 ease-in">
      <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <img src={img} alt="" />
        <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Offer;
