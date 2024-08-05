import React from 'react';

const BlogHeader = () => {
  return (
    <div className="bg-[#F4F4F4] md:pl-36 pl-6 md:pr-96 md:pt-20 pt-4">
      <h1 className="md:text-5xl text-2xl text-black font-bold">
        Sustainability Web Designs <br />{' '}
        <span className="text-[#490ED9] font-bold">
          Accessible & best SEO practices
        </span>
      </h1>
      <div className="flex flex-row items-center justify-between md:py-10 py-5 pr-6">
        <p className="text-black md:text-lg text-base">
          By Christine Josephous
        </p>
        <time className="md:text-lg text-black text-base">05 June 2024</time>
      </div>
      <hr className="border border-gray-200 mb-10" />
    </div>
  );
};

export default BlogHeader;
