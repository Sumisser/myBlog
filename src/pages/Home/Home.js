import React, { useState } from 'react';

import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import Login from './components/Login';

import img from '../../assets/images/bg.jpeg';

const Home = () => {
  const [filter, setFilter] = useState({
    grayscale: '90%',
    blur: '3px'
  });

  const login = value => {
    debugger;
    if (value === '我命由我不由天！') {
      changeBg();
    } else {
      changeBg();
      setTimeout(() => {
        setFilter({
          grayscale: '70%',
          blur: '3px'
        });
      }, 1500);
    }
  };
  const changeBg = () => {
    setFilter({
      grayscale: '0%',
      blur: '0px'
    });
  };


  return (
    <div className='home'>
      <Nav />
      <section className='guide'>
        <Login login={login}/>
        <div className='content'>
          <Logo className='logo' />
          <div className='text'>
            是你告诉你给女士告诉过你是，三级送给你说了的故事，谁跟你说，十多年归属感，是的泥石流等那个.
          </div>
        </div>
        <Footer className='footer' left='100' right='0' />
      </section>
      <section className='bg' />
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
        .bg {
          height: calc(100vh - 50px);
          background: url(${img}) no-repeat;
          background-size: contain;
          background-position: center;
          filter: grayscale(${filter.grayscale}) blur(${filter.blur});
          transition: all 1s;
          transition-timing-function: ease;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
};

export default Home;
