import Image from 'next/image';
import BlogCard from './BlogCard';
import Categories from './Categories';

export default function BlogIndexPage() {
  return (
    <main className="bg-[#F4F4F4] px-36 py-20" aria-labelledby="blog-title">
      <h2 className="text-6xl text-black" id="blog-title" role="banner">
        Sustainability Web Designs <br />{' '}
        <span className="text-[#490ED9] font-semibold">
          Accessible & best SEO <br /> practices
        </span>
      </h2>
      <div className="flex flex-row justify-between mt-24">
        <Categories />
        <section className="flex flex-row flex-wrap gap-8 w-[45vw]">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
      </div>
    </main>
  );
}
