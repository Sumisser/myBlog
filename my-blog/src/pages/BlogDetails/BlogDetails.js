import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Logo from '../../components/Logo';

const BlogDetails = props => {
  const id = props.match.params.id;
  const [post,setPost] = useState({})
  useEffect(() => {
    const getPostDetails = async () => {
      const { data: post } = await axios(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(post)
    };
    getPostDetails()
  });
  return (
    <div>
      <header>
        <Logo />
      </header>
      <section className='content'>
        <div className='back'>
          <Link to='/blog'>
            <i className='icon-font icon-right' />
          </Link>
        </div>
        <article>
          <h2>{post.title}</h2>
          <div>{post.body}</div>
        </article>
      </section>
      <style jsx>{`
        header {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          width: 90%;
          margin: auto;
        }
        .back {
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;
