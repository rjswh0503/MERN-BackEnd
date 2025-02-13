const express = require('express');
const bodyParser = require('body-parser');

// router 미들웨어가 되어 편하게 사용 가능
const placesRoutes = require('./routes/places-routes');
const userRoutes = require('./routes/users-routes');


const app = express();

app.use(bodyParser.json());

app.use('/api/places',placesRoutes); // => /api/places/...


/*
오류 처리 미들웨어 생성
앞의 미들웨어에서 오류가 있어야만 발동하는 함수이다.
모든 라우터에서 사용 가능

*/
app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({Message: error.Message || '알 수 없는 애러가 발생했습니다.!!'});
});


app.listen(5000, (req,res) => {
    console.log('서버 실행중....')
});