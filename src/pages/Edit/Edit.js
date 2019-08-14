import React, { useState, useEffect } from 'react';

import Editor from 'for-editor';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Logo from '../../components/Logo';
import Footer from '../../components/Footer';

const Edit = props => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    console.log(props);
    if (props.location.id) {
      getDetail(props.location.id);
    }
    console.log(content);
  }, []);

  const getDetail = async id => {
    const { data: post } = await axios(`http://localhost:8080/blog/${id}`);
    debugger;
    setTitle(post.title);
    setContent(post.content);
  };
  const handleSave = async () => {
    const method = props.location.id ? 'put' : 'post';
    const url = props.location.id ? `/blog/${props.location.id}` : '/blog';
    if (!title || !content) {
      props.history.goBack();
      return;
    }
    await axios({
      method,
      url: `http://localhost:8080${url}`,
      data: {
        title,
        content
      }
    }).finally(() => {
      props.history.goBack();
    });
  };
  return (
    <div>
      <header>
        <Logo />
      </header>
      <section className='content'>
        <div className='title'>
          {/* <input
            type='text'
            value={title}
            placeholder='请输入标题'
            onChange={e => {
              setTitle(e.target.value);
            }}
          /> */}
          <TextField
            id='title'
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
            placeholder='输入标题'
            label='标题'
          />
        </div>
        <Editor
          value={content}
          onChange={value => {
            setContent(value);
          }}
          onSave={handleSave}
        />
      </section>
      <Footer left='100' right='100' />
      <style jsx>{`
        header {
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          box-sizing: border-box;
          padding: 0 100px 50px 100px;
          margin: auto;
          min-height: calc(100vh - 380px);
        }
        .title {
          margin-bottom: 50px;
        }
        label.Mui-focused {
          color: #e9432b !important;
        }
        .MuiInput-underline:after {
          border-bottom-color: #e9432b;
        }

        input {
          font-size: 18px;
          width: 300px;
          border: none;
          outline: none;
          padding: 10px 10px 10px 5px;
          border-bottom: 2px solid rgba(0, 0, 0, 0);
        }
        input::placeholder {
          color: #e0e0e0;
          font-style: italic;
        }
        input:focus {
          border-bottom: 2px solid #52555a;
          transition: all 0.7s ease;
        }
      `}</style>
    </div>
  );
};

export default Edit;
