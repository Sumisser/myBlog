import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import ReactLoading from 'react-loading';

import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

const BlogDetails = props => {
  const id = props.match.params.id;
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPostDetails = async () => {
      const { data: post } = await axios(
        `http://localhost:4000/blog/${id}`
      );
      setPost(post);
    };
    getPostDetails();
  },[]);
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
          <article>
            <h2>{post.title}</h2>
            <div>{post.body}</div>
          </article>
        ) : (
          <ReactLoading
            className='loading'
            type='bars'
            color='#e9432b'
            height={50}
            width={50}
          />
        )}
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
      `}</style>
    </div>
  );
};

export default BlogDetails;
