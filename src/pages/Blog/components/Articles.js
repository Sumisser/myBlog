import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({title,body,postId}) => {
  return (
    <div className='articles'>
      <div className='space' />
      <h3 className='title'>{title}</h3>
      <article dangerouslySetInnerHTML={{__html:body}}>
        
      </article>
      <Link className="more" to={`/${postId}`}>阅读全文</Link>
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
        }
        article {
          max-width: 800px;
          font-size: 14px;
        }
        .more{
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
