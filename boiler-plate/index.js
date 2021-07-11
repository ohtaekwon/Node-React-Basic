const express = require('express') // 설치한 express 모듈 가져온다.
const app = express()  // 함수로 가져옴
const port = 3000 // 3000 포트를 백서버로 둔다.


// mongodb+srv://TKOH:<password>@boilerplate.vil4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://TKOH:1234@boilerplate.vil4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false //에러를 방지하기 위해
}).then(()=>console.log('MongoDB Connected....'))
  .catch(err=> console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!~~~ 안녕 무야호~~!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})