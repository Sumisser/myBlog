import React from 'react';

const Input = () => {
  const handleSubmit = () => {};
  return (
    <div className='input'>
      <form onSubmit={handleSubmit}>
        <input type='text' />
      </form>
      <style jsx>{`
        .input {
          box-shadow: #e94328 2px 5px;
        }
        input {
          height: 25px;
          width: 200px;
          border: 1px solid #18191b;
          outline: #e94328;
        }
      `}</style>
    </div>
  );
};

export default Input;
