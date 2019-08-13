import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ left = 0, right = 0 }) => {
  return (
    <footer className='footer'>
      <div className='copy-right'><span role="img" aria-label="copyright">©️ </span>2019 缥缈之境</div>
      <div className='icons'>
        <FontAwesomeIcon icon={faHeart} />
        &nbsp; Liu Huanyu
      </div>
      <style jsx>{`
        footer {
          box-sizing: border-box;
          width: 100%;
          height: 80px;
          border-top: 1px solid #a7abb3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 ${right}px 0 ${left}px;
          color: #a7abb3;
          font-size: 14px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
