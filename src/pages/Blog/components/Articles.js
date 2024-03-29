import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import DeleteButton from './DeleteButton';

const Articles = ({ title, body, postId, deleteBlog }) => {
  const [deleteVisible, setDeleteVisible] = useState(false);
  const toggleDelete = e => {
    let visible = e.type === 'mouseenter';
    setDeleteVisible(visible);
  };

  return (
    <div className='articles'>
      <div className='space'/>
      <h3
        className='title'
        onMouseEnter={toggleDelete}
        onMouseLeave={toggleDelete}>
        <span className='name'>{title}</span>
        {window.localStorage.getItem('token') && (
          <DeleteButton
            visible={deleteVisible}
            deleteBlog={deleteBlog}
            postId={postId}
          />
        )}
      </h3>
      <article dangerouslySetInnerHTML={{ __html: body }} />
      <Link className='more' to={`/blog/${postId}`}>
        阅读全文
      </Link>
      <style jsx>{`
        .articles {
          padding: 0 100px;
          color: #52555a;
          margin: 80px 0;
        }
        .articles .space {
          height: 0;
          width: 50px;
          border-top: 2px solid #52555a;
        }
        .articles h3 {
          font-size: 24px;
          margin: 30px 0 15px;
          width: 100%;
          min-width: 500px;
          min-height: 32px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .articles h3 .name {
          margin-right: 20px;
        }
        article {
          max-width: 800px;
          font-size: 14px;
        }
        .more {
          display: block;
          font-size: 14px;
          margin-top: 10px;
          color: #e9432b !important;
        }
      `}</style>
    </div>
  );
};

export default Articles;
