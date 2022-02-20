const express = require('express')
const app = express()
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 3001

//app.get('/', (req, res) => {
//  res.send('ご覧いただき、ありがとうござます！アート？展へようこそ！編集可能なURLはこちら > https://miro.com/app/board/uXjVOaDyfXs=/　　閲覧可能なURLはこちら > https://t.co/BpZYRgn9He')
//})

app.get("/api", (req, res) => {
  res.json({ message: "アートとはなんだろう。" });
});

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../frontend/build/index.html');
  res.sendFile(filePath);
});

app.use('/static', express.static(path.join(__dirname, '../frontend/build/static')))

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})
