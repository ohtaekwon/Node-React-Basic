const express = require('express') // 설치한 express 모듈 가져온다.
const app = express()  // 함수로 가져옴
const port = 3000 // 3000 포트를 백서버로 둔다.

app.get('/', (req, res) => {
  res.send('Hello World!~~~ 무야호!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})