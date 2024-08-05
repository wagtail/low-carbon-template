import React from 'react';

const BlogHeader = () => {
  return (
    <div className="bg-[#F4F4F4] pl-36 pr-96 pt-20">
      <h1 className="text-5xl text-black" id="blog-title">
        Sustainability Web Designs <br />{' '}
        <span className="text-[#490ED9] font-semibold">
          Accessible & best SEO practices
        </span>
      </h1>
      <div className="flex flex-row items-center justify-between py-10">
        <p className="text-black text-lg">By Christine Josephous</p>
        <time className="text-lg text-black">05 June 2024</time>
      </div>
      <hr className="border border-gray-200 mb-10" />
    </div>
  );
};

export default BlogHeader;
