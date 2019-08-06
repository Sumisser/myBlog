import React from 'react';

const Footer = ({ left = 0, right = 0 }) => {
  return (
    <footer className='footer'>
      <div className='copy-right'>©️ 2019 缥缈之境</div>
      <div className='icons'>
        <i className='icon-font icon-shoucang' />
      </div>
      <style jsx>{`
        footer {
          width: 100%;
          height: 80px;
          border-top: 1px solid #a7abb3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 ${right}px 0 ${left}px;
        }
        .copy-right {
          font-size: 12px;
          color: #a7abb3;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
