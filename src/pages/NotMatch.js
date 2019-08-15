import React from 'react';

import Badge from '../components/Badge';

const NotMatch = () => {
  return (
    <div className='not-match'>
      <span className='text'>Not Found
        <Badge/>
      </span>
      <style jsx>{`
        .not-match{
          display: flex;
          height: 100vh;
        }
        .text {
          margin: auto;
          font-size: 50px;
          color: #52555a;
          font-style: italic;
          position: relative;
        }
        .badge{
          position: absolute;
          top: -20px;
          right: -30px;
        }
      `}</style>
    </div>
  );
};

export default NotMatch;
