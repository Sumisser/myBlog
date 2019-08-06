import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav'
import Articles from './components/Articles';
import Footer from '../../components/Footer';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data:posts } = await axios(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(posts.slice(0,3));
      } catch (error) {
        console.log(error.response)
      }
    };
    getPosts();
  }, []);
  return (
    <div className='blog'>
      <Logo className='logo' />
      <Nav/>

      <div className='content'>
        {posts.map(post => {
          return (
            <Articles
              key={post.id}
              title={post.title}
              body={post.body}
              postId={post.id}
            />
          );
        })}
      </div>
      <Footer/>
      <style jsx>{`
        .blog {
          position: relative;
          overflow: hidden;
        }
        .logo {
          position: absolute;
          top: 100px;
          left: 100px;
        }
        .content {
          margin-top: 300px;
        }
      `}</style>
    </div>
  );
};

export default Blog;
