import React, { useState } from 'react';
import axios from '../../util/axios';

import Nav from '../../components/Nav';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import Login from './components/Login';

import img from '../../assets/images/bg.jpeg';

const Home = () => {
  const isLogin = window.localStorage.getItem('token');
  const [filter, setFilter] = useState({
    grayscale: '90%',
    blur: '3px'
  });

  const login = async password => {
    try {
      const { data: token } = await axios({
        method: 'post',
        url: 'login',
        data: {
          password
        }
      });
      localStorage.setItem('token', token);
      changeBg();
    } catch (error) {
      localStorage.removeItem('token');
      if (isLogin) {
        setFilter({
          grayscale: '70%',
          blur: '3px'
        });
      } else {
        changeBg();
        setTimeout(() => {
          setFilter({
            grayscale: '70%',
            blur: '3px'
          });
        }, 1500);
      }
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
        <Login login={login} />
        <div className='content'>
          <Logo className='logo' />
          <div className='text'>
            <p>我要这天&emsp;再遮不住我眼</p>
            <p>
              &emsp;要这地&emsp;再埋不了我心
              <p>&emsp;&emsp;要这众生&emsp;都明白我意</p>
              <p>&emsp;&emsp;&emsp;要那诸佛&emsp;都烟消云散</p>
            </p>
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
        .text p {
          margin: 20px 0;
          font-size: 20px;
          font-family: 'hdjxingshu1b344c5f3420564';
        }
        .bg {
          height: calc(100vh - 50px);
          background: url(${img}) no-repeat;
          background-size: contain;
          background-position: center;
          filter: grayscale(${isLogin ? '0' : filter.grayscale})
            blur(${isLogin ? '0' : filter.blur});
          transition: all 1s;
          transition-timing-function: ease;
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
};

export default Home;
