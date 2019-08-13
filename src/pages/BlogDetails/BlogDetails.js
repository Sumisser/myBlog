import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from 'react-loading';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css';

import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

const theme = createMuiTheme({
  palette: {
    secondary: { main: '#e9432b' }
  }
});

const BlogDetails = props => {
  const id = props.match.params.id;
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPostDetails = async () => {
      try {
        const { data: post } = await axios(`http://localhost:8080/blog/${id}`);
        setPost(post);
      } catch (error) {
        console.log(error.response);
      }
    };
    getPostDetails();
  }, []);
  return (
    <div>
      <header>
        <Logo />
      </header>
      <section className='content'>
        <div className='back'>
          <Link to='/blog'>
            <FontAwesomeIcon icon={faLongArrowAltLeft} size='lg' />
          </Link>
        </div>
        {Object.keys(post).length ? (
          <div className='markdown-body'>
            <ReactMarkdown source={post.content} />
          </div>
        ) : (
          <ReactLoading
            className='loading'
            type='bars'
            color='#e9432b'
            height={50}
            width={50}
          />
        )}
        <ThemeProvider theme={theme}>
          <Link
            to={{
              pathname: '/edit',
              id
            }}>
            <Fab color='secondary' aria-label='edit' className='btn'>
              <EditIcon />
            </Fab>
          </Link>
        </ThemeProvider>
      </section>
      <Footer left='100' right='100' />
      <style jsx>{`
        header {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          width: 90%;
          min-height: calc(100vh - 280px);
          margin: auto;
        }
        .loading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .back {
          margin-bottom: 40px;
        }
        .markdown-body {
          padding-bottom: 30px;
        }
        .btn {
          position: fixed;
          bottom: 100px;
          right: 80px;
        }
      `}</style>
    </div>
  );
};

export default BlogDetails;
