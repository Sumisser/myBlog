import React, { useState } from 'react';

const Input = ({ login }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    login(value);
  };
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} onChange={handleChange} />
      </form>
      <style jsx>{`
        .input {
          box-shadow: #e94328 2px 5px;
        }
        input {
          height: 25px;
          width: 200px;
          border: 1px solid #ccc;
          outline: #e94328;
        }
      `}</style>
    </div>
  );
};

export default Input;
