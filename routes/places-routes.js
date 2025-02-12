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

router.get('/:pid',(req,res,next) => {
    const placesId = req.params.pid // { pId : 'p1'}
    const place = DUMMY_PLACES.find(p => {
        return p.id === placesId
    });
   res.json({place})
});


router.get('/user/:uid', (req,res, next) => {
    const userId = req.params.uid;
    const user = DUMMY_PLACES.find(u => {
        return u.creator === userId
    });
    res.json({user})
})

//places 파일에 있는 router를 내보냄
// 오로지지 내보내기만 하므로 app.js에서 불러와야 함
module.exports = router;