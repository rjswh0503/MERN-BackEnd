const express = require('express');
const bodyParser = require('body-parser');

// router 미들웨어가 되어 편하게 사용 가능
const placesRoutes = require('./routes/places-routes');
const userRoutes = require('./routes/users-routes');


const app = express();


app.use('/api/places',placesRoutes); // => /api/places/...




app.listen(5000, (req,res) => {
    console.log('서버 실행중....')
});