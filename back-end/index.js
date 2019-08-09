const express = require('express');
const routes = require('./routes/api');
const mongoose = require('mongoose');


const app = express();

// 连接数据库
mongoose.connect('mongodb://localhost:27017/myBlog');
mongoose.Promise = global.Promise;

app.use(express.json());

app.use(routes);

app.listen(8080, () => {
  console.log('服务已启动');
});
