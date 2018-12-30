const router = require('express').Router();
const ReviewModel = require('../models/ReviewModel');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    ReviewModel.find({}, (err, data) => {
        res.setHeader('Content-Type', 'application/json');

        if (err) {
            res.send(JSON.stringify({ message: 'error happened while fetching reviews' }));
        };

        res.send(JSON.stringify(data));
    })
});

router.get('/:reviewId', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    ReviewModel.findById({ _id: ObjectId(req.params.reviewId) }, (err, data) => {
        res.setHeader('Content-Type', 'application/json');        
        if (err) res.send({ error: `The review with ${req.params.reviewId} is not found` });
        else res.send(JSON.stringify(data));
    })
});

router.post('/', (req, res) => {
    let model = new ReviewModel({
        text: req.body.summary,
        author: req.body.author
    });

    model.save((err, model) => {
        res.setHeader('Content-Type', 'application/json');
        if (err){
            console.log(err);
            res.send(JSON.stringify({ message: `Error happened while saving the ${model}` }));
            return;
        }
        console.log(`Saved object ${model}`);
        res.send(JSON.stringify(model));
    });
});

router.put('/', (req, res) => {
    ReviewModel.updateOne({ _id: ObjectId(req.body.id) }, {
        text: req.body.text,
        updatedAt: Date.now
    }, (err, updatedObj) => {
        res.setHeader('Content-Type', 'application/json');
        if (err){
            console.log(err)
            res.send(JSON.stringify({ error: `Error while updating the review with id: ${req.body.id}` }));
            return;
        }
        res.send(JSON.stringify(updatedObj));
    })
});

router.delete('/', (req, res) => {
    ReviewModel.deleteOne({ _id: ObjectId(req.body.id) }, err => {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send({ error: `Error while deleting review with id: ${req.body.id}` });
        else res.send({ message: `The review with ${req.body.id} was deleted` });
    })
})

module.exports = router;