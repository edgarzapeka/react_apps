const router = require('express').Router();
const TodoModel = require('../models/TodoModel');
const ObjectId = require('mongoose').Types.ObjectId;

const staticData = [
    {
        id: 1,
        text: 'Buy some fruits!'
    },
    {
        id: 2,
        text: 'Go to ups and get the package'
    },
    {
        id: 3,
        text: 'Enjoy the day and have fun :)'
    }
]

router.get('/', (req, res) => {
    TodoModel.find({}, (err, data) => {
        res.setHeader('Content-Type', 'application/json');

        if (err) {
            res.send(JSON.stringify({ message: 'error happened while fetching posts' }));
        };

        res.send(JSON.stringify(data));
    })
});

router.get('/:todoId', (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    TodoModel.findById({ _id: ObjectId(req.params.todoId) }, (err, data) => {
        res.setHeader('Content-Type', 'application/json');        
        if (err) res.send({ error: "The object is not found" });
        else res.send(JSON.stringify(data));
    })
});

router.post('/', (req, res) => {
    let model = new TodoModel({
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
    TodoModel.updateOne({ _id: ObjectId(req.body.id) }, {
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
    TodoModel.deleteOne({ _id: ObjectId(req.body.id) }, err => {
        res.setHeader('Content-Type', 'application/json');
        if (err) res.send({ error: "The object wasn't deleted" });
        else res.send({ message: 'The object was deleted' });
    })
})

module.exports = router;