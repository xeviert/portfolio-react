import React from 'react';
import Link from 'next/link';
import { getBlogs } from '../../blogStore';

const styles = {
  blogItemLeft: {
    width: '30%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    height: '100%',
    paddingTop: '40px',
    paddingLeft: '30px',
    margin: '30px',
    color: '#fff',
  },
  blogDate: {
    margin: '0',
    fontSize: '18px',
  },
  blogDesc: {
    paddingBottom: '14px',
  },
  readMore: {
    color: 'var(--mc)'
  },
};

const BlogList = () => {
  const blogs = getBlogs();

  return (
    <section id="blog">
      <div className="container">
        <div className="roww">
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Blog</h3>
            <h3 className="title">Latest Posts</h3>
            <p className="desc">
              Stay updated with the latest news and articles on our blog. Explore insights, tips, and trends from industry experts.
            </p>
          </div>

          <div className="resumo_fn_service_list">
            <ul>
              {blogs.map(blog => (
                <li key={blog.id}>
                  <div className="item">
                    <div className="blog-item-left" style={styles.blogItemLeft}>
                      <p className="blog-date" style={styles.blogDate}>{blog.date}</p>
                    </div>
                    <div className="item_left">
                      <h3>{blog.title}</h3>
                      <p className='blog-desc' style={styles.blogDesc}>{blog.desc}</p>
                      <Link href={`/blog/${blog.id}`}>
                        <a className="read_more" style={styles.readMore}>Read More...</a>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;