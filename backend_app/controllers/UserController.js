const router = require('express').Router();
const UserModel = require('../models/UserModel');

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
                res.send(JSON.stringify({ actionSucceeded: false, message: 'Error happened while saving user data' }));
                return;
            }
            console.log(`Saved object ${model}`);
            res.send(JSON.stringify({ actionSucceeded: true, user: model }));
        });

    }else{
        res.send(JSON.stringify({ actionSucceeded: false, message: 'Invalid parameters' }));
    }
});

router.post('/login', (req, res) => {
    res.setHeader('Content-Type', 'application/json'); 
    if ( req.body.email && 
        req.body.password) {
        
        UserModel.authenticate(req.body.email, req.body.password, (err, user) => {
            if (err || !user) {
                res.send(JSON.stringify({ actionSucceeded: false }))
            }else {
                req.session.userId = user._id;
                res.send(JSON.stringify({ actionSucceeded: true }))
            }
        })
    }else{
        res.send(JSON.stringify({ actionSucceeded: false }));
    }

})

module.exports = router;