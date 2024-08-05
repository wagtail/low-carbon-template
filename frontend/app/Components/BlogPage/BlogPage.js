import React from 'react';
import BlogHeader from './BlogHeader';
import BlogContent from './BlogContent';
import RelatedBlogs from './RelatedBlogs';

const BlogPage = () => {
  return (
    <>
      <BlogHeader />
      <BlogContent />
      <RelatedBlogs />
    </>
  );
};

export default BlogPage;
