const router = require('express').Router();
const UserModel = require('../models/UserModel');
const ObjectId = require('mongoose').Types.ObjectId;

router.post('/signup', (req, res) => {
    res.setHeader('Content-Type', 'application/json'); 

    if ( req.body.email && 
         req.body.username && 
         req.body.password && 
         req.body.passwordConf) {

        let model = new UserModel({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf
        });
    
        model.save((err, model) => {
            if (err){
                console.log(err);
                res.send(JSON.stringify({ userCreated: false, message: 'Error happened while saving user data' }));
                return;
            }
            console.log(`Saved object ${model}`);
            res.send(JSON.stringify({ userCreated: true, user: model }));
        });

    }else{
        res.send(JSON.stringify({ userCreated: false, message: 'Invalid parameters' }));
    }
});

module.exports = router;