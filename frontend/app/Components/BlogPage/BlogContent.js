import React from 'react';
import Image from 'next/image';

const BlogContent = () => {
  return (
    <div
      className="bg-[#F4F4F4] pl-36 pr-96"
      role="article"
      aria-labelledby="blog-title"
    >
      <p className="text-black text-xl">
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
        role="img"
        aria-labelledby="image-description"
        /> */}
      <p className="text-black text-xl">
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
