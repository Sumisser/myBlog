import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Pagination = ({ pages, currentIndex = 1, changeIndex }) => {
  let arr = [];
  for (let i = 0; i < pages; i++) {
    let e = i + 1 < 10 ? '0' + (i + 1).toString() : i + 1;
    arr.push(e);
  }

  return (
    <div className='pagination'>
      <IconButton aria-label='prev' size='small' onClick={() => {changeIndex(currentIndex - 1)}}>
        <KeyboardArrowLeft />
      </IconButton>
      {arr.map((page,index) => {
        return (
          <span className='index' key={index} onClick={() => {changeIndex(index + 1)}}>
            {page}{currentIndex === index + 1 && <i/>}
          </span>
        );
      })}

      <IconButton aria-label='next' size='small' onClick={() => {changeIndex(currentIndex + 1)}}>
        <KeyboardArrowRight />
      </IconButton>
      <style jsx>{`
        .pagination {
          display: flex;
          align-items: center;
          padding: 0 100px;
          margin-bottom: 50px;
        }
        .pagination span.index {
          position: relative;
          display: inline-block;
          font-size: 16px;
          line-height: 18px;
          height: 18px;
          text-align: center;
          cursor: pointer;
          margin: 0 15px;
        }
        .pagination .index i {
          display: block;
          width: 8px;
          height: 8px;
          border-radius: 50% 50%;
          background: #e9432b;
          position: absolute;
          top: -1px;
          right: -2px;
        }
      `}</style>
    </div>
  );
};

export default Pagination;
