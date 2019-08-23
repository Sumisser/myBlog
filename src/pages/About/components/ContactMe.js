import React, { useState } from 'react';

import axios from '../../../util/axios';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comments, setComments] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    verify();
    await axios({
      method: 'post',
      url: 'message',
      data: {
        name,
        phone,
        comments
      }
    });
    setName('');
    setPhone('');
    setComments('');
  };
  const verify = () => {
    const reg = /^1[358]\d{9}/;
    if (!name) {
      alert('请输入名字');
      return;
    }
    if (!phone) {
      alert('请输入电话');
      return;
    }
    if (!reg.test(phone)) {
      alert('请输入正确的电话');
      return;
    }
    if (!comments) {
      alert('请输入留言');
      return;
    }
  };
  return (
    <>
      <h3>
        <span>联系我</span>
      </h3>
      <article>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              placeholder='姓名'
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='联系电话'
              value={phone}
              onChange={e => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div>
            <textarea
              cols='30'
              rows='10'
              placeholder='请留言……'
              value={comments}
              onChange={e => {
                setComments(e.target.value);
              }}
            />
          </div>

          <div>
            <button>发送</button>
          </div>
        </form>
      </article>
      <style jsx>{`
        .content .text section article form div {
          margin: 15px 0;
        }
        .content .text section article form input,
        .content .text section article form textarea {
          font-size: 16px;
          background: rgb(248, 248, 248);
          border: none;
          outline: none;
        }
        .content .text section article form input {
          width: 300px;
          height: 40px;
          padding: 0 10px;
        }
        .content .text section article form textarea {
          width: 500px;
          height: 200px;
          padding: 10px;
          resize: none;
        }
        .content .text section article form button {
          width: 60px;
          height: 35px;
          border: none;
          outline: none;
          background: #222;
          color: #fff;
          font-size: 16px;
        }
      `}</style>
    </>
  );
};

export default ContactMe;
