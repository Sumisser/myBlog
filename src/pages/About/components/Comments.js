import React, { useEffect } from 'react';
import axios from '../../../util/axios';

const Comments = () => {
  useEffect(() => {
    const getComments = async () => {
      const { data: comments } = await axios('message');
      console.log(comments);
    };
    getComments();
  }, []);
  return (
    <>
      <h3>
        <span>联系我</span>
      </h3>
      <article>
        <p>
          送你个是你是你高速公路你说过is阿里跟你说个事你十多个你送给你四送给你是个；来跟你说；国内四大跟您说的国内四大功能
        </p>
      </article>
    </>
  );
};

export default Comments;
