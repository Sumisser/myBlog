import React from 'react';

const Menu = ({ toggleInput,muneStatus }) => {
  const toggleMenu = () => {
    toggleInput(!muneStatus);
  };
  const active = muneStatus ? 'active' : '';
  return (
    <div className='menu' onClick={toggleMenu}>
      <div className='btn-cont'>
        <div className={`main-btn ${active}`}>
          <div className='custom-menu-toggle openMenu' />
        </div>
        <div className='side-btns'>
          <div className='side-btn' />
        </div>
      </div>
      <style jsx>{`
        .menu {
          width: 96px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .main-btn {
          position: relative;
          width: 6rem;
          height: 6rem;
          font-size: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          border-radius: 50%;
          cursor: pointer;
          background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 50%,
            #a139f0 50%,
            #dc34f5 75%,
            #a139f0 100%
          );
          background-size: 100% 200%;
          background-position: 0% 100%;
          color: #18191b;
          transition: 400ms;
          box-shadow: 0px 0px 0px rgba(255, 255, 255, 0);
          transform: rotate(0deg);
          opacity: 1;
        }
        .main-btn:hover {
          box-shadow: 0px 0px 10px rgba(255, 255, 255, 0);
        }

        .custom-menu-toggle {
          position: absolute;
          width: 2.3rem;
          height: 0.23rem;
          border-radius: 2px;
          background-color: #18191b;
          display: block;
          margin: auto;
          transition: 400ms;
        }
        .custom-menu-toggle:before {
          position: absolute;
          width: 2.3rem;
          height: 0.23rem;
          border-radius: 2px;
          background-color: #18191b;
          display: block;
          margin: auto;
          transition: 400ms;
          content: '';
          backface-visibility: hidden;
          transform: rotate(0deg) translateY(10px);
        }
        .custom-menu-toggle:after {
          position: absolute;
          width: 2.3rem;
          height: 0.23rem;
          border-radius: 2px;
          background-color: #18191b;
          display: block;
          margin: auto;
          transition: 400ms;
          content: '';
          backface-visibility: hidden;
          transform: rotate(0deg) translateY(-10px);
        }

        .main-btn.active .custom-menu-toggle {
          background-color: rgba(255, 255, 255, 0);
        }
        .main-btn.active .custom-menu-toggle:before {
          position: absolute;
          width: 2.3rem;
          height: 0.23rem;
          border-radius: 2px;
          background-color: #18191b;
          display: block;
          margin: auto;
          transition: 400ms;
          content: '';
          transform: rotate(45deg) translateY(0px);
        }
        .main-btn.active .custom-menu-toggle:after {
          position: absolute;
          width: 2.3rem;
          height: 0.23rem;
          border-radius: 2px;
          background-color: #18191b;
          display: block;
          margin: auto;
          transition: 400ms;
          content: '';
          transform: rotate(-45deg) translateY(0px);
        }
      `}</style>
    </div>
  );
};

export default Menu;
