const exrpess = require('express');

const router = exrpess.Router();

router.get('/',(req,res,next) => {
    console.log('places에서 get요청함');
    res.send('작동 잘됨!!');
});

//places 파일에 있는 router를 내보냄
// 오로지지 내보내기만 하므로 app.js에서 불러와야 함
module.exports = router;