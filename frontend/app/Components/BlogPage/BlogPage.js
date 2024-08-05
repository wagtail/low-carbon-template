import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import RelatedBlogs from './RelatedBlogs';

const BlogPage = () => {
  return (
    <main>
      <BlogHeader />
      <BlogContent />
      <RelatedBlogs />
    </main>
  );
};

export default BlogPage;
