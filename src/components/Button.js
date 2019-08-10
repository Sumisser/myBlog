import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  icon,
  link,
  backgroundColor = '#e9432b',
  color = '#fff'
}) => {
  return (
    <div className='btn'>
      {link ? (
        <Link to={link}>
          <button>
            <FontAwesomeIcon icon={icon} size='lg' />
          </button>
        </Link>
      ) : (
        <button>
          <FontAwesomeIcon icon={icon} size='lg' />
        </button>
      )}

      <style jsx>{`
        .btn {
          width: 50px;
          height: 50px;
        }
        button {
          width: 100%;
          height: 100%;
          border-radius: 50% 50%;
          border: none;
          background: ${backgroundColor};
          cursor: pointer;
          outline: none;
          color: ${color};
        }
        button:hover {
          box-shadow: 0px 3px 3px #ccc;
        }
      `}</style>
    </div>
  );
};

export default Button;
