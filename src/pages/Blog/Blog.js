import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import axios from '../../util/axios';

import Logo from '../../components/Logo';
import Nav from '../../components/Nav';
import ReactLoading from 'react-loading';
import Articles from './components/Articles';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';

const theme = createMuiTheme({
  palette: {
    secondary: { main: '#e9432b' },
    primary: { main: '#52555a' }
  }
});

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(1);
  const [index, setIndex] = useState(1);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async (i = 1) => {
    try {
      setLoading(true);
      const {
        data: { pages, posts, index }
      } = await axios.get('blog', {
        params: {
          index: i
        }
      });
      setPosts(posts);
      setPages(pages);
      setIndex(index);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleDelete = () => {
    deleteBlog(id);
    setOpen(false);
  };
  const deleteBlog = async id => {
    await axios({
      method: 'delete',
      url: `blog/${id}`
    });
    getPosts();
  };
  const changeIndex = index => {
    getPosts(index);
  };

  let content;
  if (loading) {
    content = (
      <ReactLoading
        className='loading'
        type='bars'
        color='#e9432b'
        height={50}
        width={50}
      />
    );
  } else {
    if (posts.length) {
      content = posts.map(post => {
        return (
          <ThemeProvider theme={theme}>
            <Articles
              key={post._id}
              title={post.title}
              body={post.body}
              postId={post.id}
              deleteBlog={id => {
                setOpen(true);
                setId(id);
              }}
            />
          </ThemeProvider>
        );
      });
    } else {
      content = (
        <div className='empty'>
          <p>暂时还没有博客……</p>
        </div>
      );
    }
  }

  return (
    <div className='blog'>
      <Logo className='logo' />
      <Nav />

      <div className='content'>
        <div className='article-list'>
          {content}

          {pages > 1 && (
            <Pagination
              pages={pages}
              currentIndex={index}
              changeIndex={changeIndex}
            />
          )}
        </div>
        {window.localStorage.getItem('token') && (
          <ThemeProvider theme={theme}>
            <Link to='/edit'>
              <Fab color='secondary' aria-label='add' className='btn'>
                <AddIcon />
              </Fab>
            </Link>
          </ThemeProvider>
        )}
      </div>
      <Footer left='100' right='100' />

      {/* 提醒对话框 */}
      <ThemeProvider theme={theme}>
        <Dialog
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>确认删除？</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              点击确定后文章将被永久删除，无法恢复。Are you 确定？
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setOpen(false);
              }}
              color='primary'>
              取消
            </Button>
            <Button onClick={handleDelete} color='secondary' autoFocus>
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>

      <style jsx>{`
        .blog {
          position: relative;
          overflow: hidden;
        }
        .logo {
          position: absolute;
          top: 100px;
          left: 100px;
        }
        .content {
          margin-top: 300px;
          min-height: calc(100vh - 380px);
          display: flex;
        }
        .btn {
          position: fixed;
          bottom: 200px;
          right: 300px;
        }
        .empty {
          padding: 0 100px;
          display: flex;
          align-items: center;
          height: 100%;
        }
        .empty p {
          font-size: 24px;
          color: #e0e0e0;
          font-style: italic;
        }
        .loading {
          position: absolute;
          top: 50%;
          left: 30%;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
};

export default Blog;
