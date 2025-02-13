const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');

const DUMMY_USERS = [
    {
        id: 'u1',
        name: '신재헌',
        email: 'test@test.com',
        password: '153123'
    }

];

const getUsers = (req,res, next) => {
    res.json({ users: DUMMY_USERS });
}

const signUp = (req,res,next) => {
    const { name, email, password } = req.body;

    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if(hasUser){
        throw new HttpError('이 이메일은 이미 있습니다. 다른 이메일을 사용하세요.', 401);
    }

    const createdUser = {
        id: uuidv4(),
        name, // name : name
        email,
        password
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json({user : createdUser })
}



const login = (req,res,next) => {
    const { email, password } = req.body;

const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if(!identifiedUser || identifiedUser.password !== password) {
        // Code 422 : 사용자 입력값이 유효하지 않을 때 사용되는 코드
        throw new HttpError('사용자를 식별할 수 없으니 자격 증명을 확인하세요.', 422);
    }

    res.json({message : '로그인~'});
};



exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;
