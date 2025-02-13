const exrpess = require('express');


const placeControllers = require('../controller/places-controllers');

const router = exrpess.Router();



router.get('/:pid', placeControllers.getPlacesById);


/* 
첫 번째 라우트는 /api/places 로 시작하는 모든 요청을 처리한다.



id 값을 찾기 위해서는 params를 사용해야 함
*/

router.get('/user/:uid', placeControllers.getPlacesByUserId);


// placeControllers에 있는 createPlace함수에 포인터
router.post('/', placeControllers.createPlace);

router.patch('/:pid', placeControllers.updatePlaceById);

router.delete('/:pid', placeControllers.deletePlace);

//places 파일에 있는 router를 내보냄
// 오로지지 내보내기만 하므로 app.js에서 불러와야 함
module.exports = router;