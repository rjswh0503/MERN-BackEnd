
// uuid 고유 식별자 id 
const { v4: uuidv4 } = require('uuid');


const HttpError = require('../models/http-error');

let DUMMY_PLACES = [
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

const getPlacesById  = (req,res,next) => {
    const placesId = req.params.pid // { pId : 'p1'}

    const place = DUMMY_PLACES.find(p => {
        return p.id === placesId
    });

   if(!place){              // constructor(message,            errorCode);
    throw new HttpError('해당 ID값에 대한 장소를 찾지 못했습니다.', 404);
    
    // thorw를 할 때는 return을 쓰지 않아도 되지만, next(error)를 사용할 경우에는 앞에 return을 꼭 사용
   };
    res.json({ place })
    
};





//function getPlaceById() {...}
// const getPlaceById = function() {...}



const getPlacesByUserId = (req,res, next) => {
    const userId = req.params.uid;

    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId
    });
    
    if(!place){
       return next(
       new HttpError('해당 ID값에 대한 유저를 찾지 못했습니다.', 404)
    );
    };
    res.json({place})
};


const createPlace = (req, res, next) => {
    const { title, description, coordinates, address, creator } = req.body;
    // const title = req.body.title 과 같음..
    const createPlace = {
        id: uuidv4(),
        title,
        description,
        location : coordinates,
        address,
        creator
    };
    // DUMMY_PLACES에 createPlace데이터를 push 집어 넣어준다 . 
    DUMMY_PLACES.push(createPlace); // 

    // 보통 새롭게 등록된 것이 있을 때 201번을 반환 
    res.status(201).json({place: createPlace})
}

const updatePlaceById = (req, res, next) => {
    const { title, description } = req.body;
    const placeId = req.params.pid;

    const updatedPlace =  {...DUMMY_PLACES.find(p => p.id === placeId)};
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({place: updatedPlace});

}

const deletePlace = (req,res,next) => {
    const placeId = req.params.pid;
    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);
    res.status(200).json({message : '성공적으로 삭제되었습니다.'});
}


exports.getPlacesById = getPlacesById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlaceById = updatePlaceById;
exports.deletePlace = deletePlace;
