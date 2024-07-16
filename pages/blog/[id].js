import React from 'react';
import { useRouter } from 'next/router';
import { getBlogs } from '../../src/blogStore';
import BlogLayout from '../../src/layouts/BlogLayout'

const BlogDetail = ({ blog }) => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <BlogLayout>
      <section id="blog">
        <div className="container">

          <h1>{blog.title}</h1>
          <p>{blog.date}</p>
          <div>{blog.content}</div>

        </div>
      </section>
    </BlogLayout>
  );
};

export async function getStaticPaths() {
  const blogs = getBlogs();

  const paths = blogs.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const blogs = getBlogs();
  const blog = blogs.find(blog => blog.id === params.id);

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return { props: { blog } };
}

export default BlogDetail;
