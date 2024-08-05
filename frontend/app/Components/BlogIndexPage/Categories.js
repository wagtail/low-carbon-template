import React from 'react';
import Category from './Category';

const Categories = () => {
  return (
    <div className="md:w-[30vw]">
      <h5 className="text-gray-700 md:text-lg text-sm font-semibold mb-5">
        Categories
      </h5>
      <div className="flex flex-row md:gap-4 gap-2 flex-wrap">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
