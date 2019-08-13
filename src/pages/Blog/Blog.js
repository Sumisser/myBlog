import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import ReactLoading from 'react-loading';
import Articles from './components/Articles';
import Footer from '../../components/Footer';

const theme = createMuiTheme({
  palette: {
    secondary: { main: '#e9432b' }
  }
});

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const { data: posts } = await axios('http://localhost:8080/blog');
      setPosts(posts);
    } catch (error) {
      console.log(error.response);
    }
  };
  const deleteBlog = async id => {
    await axios({
      method: 'delete',
      url: `http://localhost:8080/blog/${id}`
    });
    getPosts();
  };
  return (
    <div className='blog'>
      <Logo className='logo' />
      <Nav />

      <div className='content'>
        <div className='article-list'>
          {posts.length ? (
            posts.map(post => {
              return (
                <ThemeProvider theme={theme}>
                  <Articles
                    key={post._id}
                    title={post.title}
                    body={post.body}
                    postId={post.id}
                    deleteBlog={deleteBlog}
                  />
                </ThemeProvider>
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
        <ThemeProvider theme={theme}>
          <Link to='/edit'>
            <Fab color='secondary' aria-label='add' className='btn'>
              <AddIcon />
            </Fab>
          </Link>
        </ThemeProvider>
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
        .btn {
          position: fixed;
          bottom: 200px;
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
