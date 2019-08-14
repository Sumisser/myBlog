import React, { useState } from 'react';

import Logo from '../components/Logo';




const NotMatch = () => {

  return (
    <div className='home'>
      
      <section className='guide'>
       
        <div className='content'>
          <Logo className='logo' />
          <div className='text'>
            <p>Not Found</p>
            
          </div>
        </div>
        
      </section>
      <style jsx>{`
        .home {
          display: flex;
          justify-content: space-between;
          overflow: hidden;
        }
        .guide,
        .bg {
          width: 50%;
          height: 100vh;
        }
        .guide {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .login {
          margin-left: 84px;
          display: flex;
          align-items: center;
          z-index: 100;
        }
        .content {
          padding-left: 100px;
        }
        .logo {
          width: 144px;
          height: 144px;
          font-size: 50px;
        }
        .text {
          width: 70%;
          margin-top: 80px;
          color: #52555a;
        }
        .text p{
          margin: 20px 0;
          font-size: 20px;
          font-family:'hdjxingshu1b344c5f3420564';
        }
        
      `}</style>
    </div>
  );
};

export default NotMatch;

