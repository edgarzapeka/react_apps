const router = require('express').Router();
const BookModel = require('../models/BookModel');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    BookModel.find({}, (err, data) => {
        res.setHeader('Content-Type', 'application/json');

        if (err) {
            res.send(JSON.stringify({ message: 'error happened while fetching posts' }));
        };

        res.send(JSON.stringify(data));
    })
});

router.get('/:bookId', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    BookModel.findById({ _id: ObjectId(req.params.bookId) }, (err, data) => {
        res.setHeader('Content-Type', 'application/json');        
        if (err) res.send({ error: "The object is not found" });
        else res.send(JSON.stringify(data));
    })
});

router.post('/', (req, res) => {
    let model = new BookModel({
        text: req.body.text
    });

    model.save((err, model) => {
        res.setHeader('Content-Type', 'application/json');
        if (err){
            console.log(err);
            res.send(JSON.stringify({ message: 'Error happened while saving the object' }));
            return;
        }
        console.log(`Saved object ${model}`);
        res.send(JSON.stringify(model));
    });
});

router.put('/', (req, res) => {
    console.log(`Received: id: ${req.body.id} | text: ${req.body.text}`);
    BookModel.updateOne({ _id: ObjectId(req.body.id) }, {
        text: req.body.text
    }, (err, updatedObj) => {
        res.setHeader('Content-Type', 'application/json');
        if (err){
            console.log(err)
            res.send(JSON.stringify({ error: 'Error while updating the post' }));
            return;
        }
        console.log(updatedObj);
        res.send(JSON.stringify(updatedObj));
    })
});

router.delete('/', (req, res) => {
    BookModel.deleteOne({ _id: ObjectId(req.body.id) }, err => {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send({ error: "The object wasn't deleted" });
        else res.send({ message: 'The object was deleted' });
    })
})

module.exports = router;