import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const DeleteButton = ({ visible, deleteBlog,postId }) => {
  return (
    <span className='delete-btn'>
      {visible && (
        <IconButton aria-label='delete' color='secondary' size='small'>
          <DeleteOutlinedIcon onClick={() => {deleteBlog(postId)}} />
        </IconButton>
      )}
    </span>
  );
};

export default DeleteButton;
