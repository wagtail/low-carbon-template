import React from 'react';

const BlogCard = () => {
  return (
    <div
      className="w-[20vw] border border-dashed border-2 border-gray-800 p-4 bg-gray-100 rounded-br-lg"
      aria-labelledby="blog-heading"
    >
      <h2 className="text-xl font-semibold mb-2 text-black" id="blog-heading">
        Green Environment: Impact of Sustainable Coding Practices
      </h2>
      <div className="flex justify-between text-gray-500 mb-6">
        <span className="text-sm">Technology</span>
        <time className="text-sm">05 June 2024</time>
      </div>
      <p className="text-gray-700 text-base">By Christine Josephous</p>
    </div>
  );
};

export default BlogCard;
