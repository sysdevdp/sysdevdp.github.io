import React from 'react';
import './blog.css';
import blogData from './blogData.json';
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const images = {
  Image1,
  Image2,
  Image3,
};

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>
      <div className="blog__container grid">
        {blogData.map((post) => (
          <div className="blog__card" key={post.id}>
            <div className="blog__thumb">
              <a href="#"><span className="blog__category">{post.category}</span></a>
              <a href="#"><img src={images[post.image]} alt={post.title} className="blog__img" /></a>
              <button className="blog__read-now">Read Now</button> {/* Added Read Now button */}
            </div>
            <div className="blog__details">
              <h3 className="blog__title">{post.title}</h3>
              <div className="blog__meta">
                <span>{post.date}</span>
                <span className="blog__dot">.</span>
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
