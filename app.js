// Express 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

// 기본 포트를 설정하거나 3000 포트를 사용합니다.
const PORT = process.env.PORT || 3000;

// 루트 경로 ('/')에 대한 GET 요청을 처리합니다.
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});
app.get('/test', (req, res) => {
  console.log("테스트를 진행합니다")
  res.send('Hello, TEST!');
});
app.use('/static', express.static('public'))

// 서버를 설정한 포트에서 실행합니다.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use('/static', express.static('public'))

// const 상수 , let  변수 사용 