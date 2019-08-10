import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import ReactLoading from 'react-loading';
import Articles from './components/Articles';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data: posts } = await axios(
          'http://localhost:8080/blog'
        );
        setPosts(posts);
      } catch (error) {
        console.log(error.response);
      }
    };
    getPosts();
  }, []);
  return (
    <div className='blog'>
      <Logo className='logo' />
      <Nav />

      <div className='content'>
        <div className="article-list">
        {posts.length ? (
          posts.map(post => {
            return (
              <Articles
                key={post._id}
                title={post.title}
                body={post.html}
                postId={post.id}
              />
            );
          })
        ) : (
          <ReactLoading
            className='loading'
            type='bars'
            color='#e9432b'
            height={50}
            width={50}
          />
        )}
        </div>
        <Button icon={faPlus} link='/edit'/>
      </div>
      <Footer left='100' right='100' />
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
          min-height: calc(100vh - 380px);
          display: flex;
        }
        .btn{
          position: fixed;
          right: 300px;
        }
        .loading {
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
};

export default Blog;
