import Image from 'next/image';
import BlogCard from './BlogCard';
import Categories from './Categories';

export default function BlogIndexPage() {
  return (
    <div className="bg-[#F4F4F4] lg:px-36 px-6 lg:py-20 py-5">
      <h1 className="lg:text-6xl text-2xl font-bold text-black">
        Sustainability Web Designs <br />{' '}
        <span className="text-[#490ED9] font-bold">
          Accessible & best SEO <br /> practices
        </span>
      </h1>
      <div className="flex md:flex-row flex-col justify-between lg:mt-24 mt-10">
        <Categories />
        <div className="flex flex-row flex-wrap md:gap-8 gap-4 md:w-[45vw] mt-10 md:mt-0">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </div>
  );
}
