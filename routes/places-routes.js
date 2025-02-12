const exrpess = require('express');

const router = exrpess.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: '세상에서 가장 유명한 고층 빌딩 중 하나',
        location: {
            lat: 40.7484405,
            lng: -73.9856644

        },
        address: '20 W 34th St., New York, NY 10001 미국',
        creator: 'u1'
    }
]

router.get('/:pid', (req,res,next) => {
    const placesId = req.params.pid // { pId : 'p1'}
    const place = DUMMY_PLACES.find(p => {
        return p.id === placesId
    });
   if(!place){
    const error = new Error('해당 ID에 대한 장소를 찾지 못했습니다.');
    error.code = 404;
    throw error;
    // thorw를 할 때는 return을 쓰지 않아도 되지만 next(error)를 사용할 경우에는 앞에 return을 꼭 사용
   } 
    res.json({place})
    
});


/* 
첫 번째 라우트는 /api/places 로 시작하는 모든 요청을 처리한다.



id 값을 찾기 위해서는 params를 사용해야 함
*/

router.get('/user/:uid', (req,res, next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId
    });
    if(!place){
        const error = new Error('해당 ID에 대한 유저를 찾지 못했습니다.');
        error.code = 404;
       return next(error);
    }
    res.json({place})
})

//places 파일에 있는 router를 내보냄
// 오로지지 내보내기만 하므로 app.js에서 불러와야 함
module.exports = router;