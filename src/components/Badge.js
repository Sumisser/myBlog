import React from 'react';

const Badge = ({ width = '1em', height = '1em' }) => {
  return (
    <div className='badge'>
      <style jsx>{`
        .badge {
          width: ${width};
          height: ${height};
          background: rgba(0, 0, 0, 0);
          border-radius: 50% 50%;
          border: 0.25em solid #e9432b;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Badge;
