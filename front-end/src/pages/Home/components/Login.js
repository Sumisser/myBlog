import React, { useState } from 'react';
import Menu from '../../../components/Menu';
import Input from '../../../components/Input';

const Login = ({ login }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  const toggleInputVisible = visible => {
    var canRun = true;
    if (!canRun) {
      return;
    }

    // 节流，防止blur和click连续触发
    setTimeout(() => {
      setInputVisible(visible);
      setMenuStatus(visible);
      canRun = false;
    }, 200);
  };
  return (
    <div className='login'>
      <Menu toggleInput={toggleInputVisible} muneStatus={menuStatus} />
      <div className='login-input'>
        <Input
          login={login}
          hidden={() => {
            toggleInputVisible(false);
          }}
          menuStatus={menuStatus}
        />
      </div>
      <style jsx>{`
        .login-input {
          transform: translate(${inputVisible ? '0' : '-500px'}, 0);
          opacity: ${inputVisible ? '1' : '0'};
          transition: transform 0.5s, opacity 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Login;
