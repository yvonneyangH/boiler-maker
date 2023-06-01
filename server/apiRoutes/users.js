const User = require('../db/User');
// apiRoutes/users.js
const router = require('express').Router();

// matches GET requests to /api/users/
router.get('/', function (req, res, next) { /* etc */});

// matches POST requests to /api/users/
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/users/:userId
router.put('/:userId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/users/:userId
router.delete('/:userId', function (req, res, next) { /* etc */});

// matches POST requests to /api/users/
router.post('/login', async (req, res, next) => { 
    try{
        const { username, password } = req.body;
        token = await User.authenticate(username, password);
        res.send (token);
    }catch(ex){
        next(ex);
    }
});

router.post('/signup', async (req, res, next) => { 
    try{
        const {username,password} = req.body;
        const user = await User.create(req.body);
        const token = user.generateToken();
        res.send(token);

        res.send (token);
    }catch(ex){
        if(ex.name === 'SequelizeUniqueConstrainError'){
            res.status(401).send('User already exists')
        }else{
            next(ex);
        }
        
    }
});

module.exports = router;