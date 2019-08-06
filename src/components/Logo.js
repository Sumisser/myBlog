import React from 'react';
import Badge from './Badge';

const Logo = () => {
  return (
    <div className='logo'>
      <p className='web-font logo-text'>
        缥缈
        <br />
        之境
      </p>
      <Badge />
      <style jsx>{`
        .logo {
          width: 92px;
          font-size: 32px;
          position: relative;
        }
        .logo-text {
          writing-mode: vertical-rl;
        }
        .badge {
          position: absolute;
          top: -0.3em;
          right: -0.3em;
        }
      `}</style>
    </div>
  );
};

export default Logo;
