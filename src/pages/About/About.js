import React, { useState } from 'react';
import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

import ContactMe from './components/ContactMe';
import Comments from './components/Comments';

import img from '../../assets/images/bg.jpeg';

const About = () => {
  return (
    <div className='about'>
      <Logo className='logo' />
      <Nav />
      <div className='content'>
        <div className='img'>
          <img src={img} alt='头像' />
        </div>
        <div className='text'>
          <section>
            <h1>李白</h1>
            <article>
              <p>
                是你感受到谁给你一首歌石膏板锁定了送你个ID公司给告诉你的个脸部识别各说各话十多年各地公里数；公司领导个ing是的你给是；各地都是；给你
              </p>
            </article>
            <h3>
              <span>获得奖项</span>
            </h3>
            <article>
              <p>按时都敢四个是你顶上；的女鬼收到你是对公；你</p>
              <p>按时都敢四个是你顶上；的女鬼收到你是对公；你</p>
              <p>按时都敢四个是你顶上；的女鬼收到你是对公；你</p>
              <p>按时都敢四个是你顶上；的女鬼收到你是对公；你</p>
            </article>
            {window.localStorage.getItem('token') ? (
              <Comments />
            ) : (
              <ContactMe />
            )}
          </section>
          <Footer right='100' />
        </div>
      </div>
      <style jsx>{`
        .logo {
          position: absolute;
          top: 100px;
          left: 100px;
        }
        .content {
          box-sizing: border-box;
          margin-top: 300px;
          min-height: calc(100vh - 380px);
          padding-left: 100px;
          display: flex;
          position: relative;
        }
        .content .img {
          width: 30%;
        }
        .content .img img {
          width: 100%;
        }
        .content .text {
          background: #fff;
          width: 70%;
          position: absolute;
          top: 100px;
          right: 0;
          padding-top: 50px;
          padding-left: 100px;
          box-sizing: border-box;
        }
        .content .text section {
          max-width: 500px;
        }
        .content .text section h1 {
          font-size: 40px;
          margin: 20px 0;
          font-weight: bolder;
        }
        .content .text section h3 {
          font-size: 20px;
          height: auto;
          font-weight: bold;
        }
        .content .text section h3 span {
          display: inline-block;
          border-top: 2px solid;
          padding: 20px 0;
        }
        .content .text section article {
          margin-bottom: 50px;
        }
        .content .text section article p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
};

export default About;
