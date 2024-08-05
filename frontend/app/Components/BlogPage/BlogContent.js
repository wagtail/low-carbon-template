import React from 'react';
import Image from 'next/image';

const BlogContent = () => {
  return (
    <div className="bg-[#F4F4F4] md:pl-36 md:pr-96 px-6">
      <p className="text-black md:text-xl text-base">
        Our approach to web design is rooted in minimalism and sustainability,
        ensuring that every site we build is optimized for energy efficiency and
        low environmental impact. Our approach to web design is rooted in
        minimalism and sustainability, ensuring that every site we build is
        optimized for energy efficiency and low environmental impact.{' '}
      </p>
      <br />
      {/* <Image
        src="/path/to/your/image.jpg"
        alt="Description of the image"
        width={500}
        height={300}
        /> */}
      <p className="text-black md:text-xl text-base">
        Our approach to web design is rooted in minimalism and sustainability,
        ensuring that every site we build is optimized for energy efficiency and
        low environmental impact. Our approach to web design is rooted in
        minimalism and sustainability, ensuring that every site we build is
        optimized for energy efficiency and low environmental impact.{' '}
      </p>
    </div>
  );
};

export default BlogContent;
