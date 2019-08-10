import React from 'react';
import Badge from './Badge';
import { NavLink as Link } from 'react-router-dom';

const Nav = () => {
  const links = [
    { path: '/home', text: '首 页' },
    { path: '/blog', text: '博 客' },
    { path: '/projects', text: '项 目' },
    { path: '/about', text: '关 于' }
  ];
  const navLinks = links.map((link, index) => {
    return (
      <li key={index}>
        <Link to={link.path}>
          {link.text}
          <Badge />
        </Link>
      </li>
    );
  });
  return (
    <nav className='nav_bar'>
      <ul>{navLinks}</ul>
      <style jsx>{`
        .nav_bar {
          width: 300px;
          height: 80px;
          padding: 0 20px;
          background: #18191b;
          color: #fff;
          box-sizing: border-box;
          position: absolute;
          right: 50px;
          top: 100px;
          z-index: 1;
        }
        ul {
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 100%;
        }
        li {
          writing-mode: vertical-lr;
          cursor: pointer;
          position: relative;
          width: 30px;
          text-align: center;
        }
        li a {
          margin: auto;
        }
        li .badge {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .active .badge {
          opacity: 1;
          width: 1.3em;
          height: 1.3em;
          position: absolute;
          top: -0.6em;
          right: 0em;
          transition: all 0.3s;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
