import React, { useState } from 'react';

import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import axios from 'axios';

const Edit = props => {
  const [editorState, setEditorState] = useState(null);

  const handleChange = editorState => {
    setEditorState(editorState);
  };
  const handleSave = async () => {
    const html = editorState? editorState.toHTML() : '';
    const reg = /^(<\w+>\s*<\/\w+>)+$/
    try {
      if (!reg.test(html)) {
        await axios({
          method: 'post',
          url: 'http://localhost:8080/blog',
          data: {
            html
          }
        });
        console.log(html)
      }

      setEditorState(BraftEditor.createEditorState(''));
      props.history.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  const extendControls = [
    {
      key: 'custom-button',
      type: 'button',
      text: '保存退出',
      onClick: handleSave
    }
  ];

  return (
    <div>
      <header>
        <Logo />
      </header>
      <section className='editor'>
        <BraftEditor
          value={editorState}
          onChange={handleChange}
          extendControls={extendControls}
        />
      </section>
      <Footer left='100' right='100' />
      <style jsx>{`
        header {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .editor {
          padding: 0 100px 0;
          margin: auto;
          min-height: calc(100vh - 280px);
        }
      `}</style>
    </div>
  );
};

export default Edit;
