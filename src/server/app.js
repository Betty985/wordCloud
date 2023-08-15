const express = require('express');
const cors = require('cors');
const data=require('./word')
const app = express();
const port = 3000;
// 使用 cors 中间件
app.use(cors());
app.get('/', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
