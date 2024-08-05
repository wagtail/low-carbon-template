import React from 'react';
import BlogCard from '../BlogIndexPage/BlogCard';

const RelatedBlogs = () => {
  return (
    <div className="bg-[#EEEDEF] md:pl-36 px-6 md:px-0 md:py-16 py-6 md:mt-10 mt-6">
      <h2 className="text-black md:text-3xl text-2xl font-semibold md:mb-10 mb-6">
        Related Blogs
      </h2>
      <div className="flex md:flex-row flex-col flex-wrap md:gap-6 gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default RelatedBlogs;
