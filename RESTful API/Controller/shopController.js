const express = require('express');
const Model = require("../Model/shopModel");
const router = express.Router();
const {verifyToken} = require("../lib/utils");

// Get all items 
router.get("/" ,(req, res) => {
    Model.find().then((data) => {
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        })
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data: [],
            error: error.message
        });
    })
});

// Get item by id
router.get("/:id", (req, res) => {
    Model.findById(req.params.id).exec().then((data) => {
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        })
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        });
    })
});

// Post item 
router.post("/", (req, res) => {
    const data = new Model({
        item_name: req.body.item_name,
        item_standard_price: req.body.item_standard_price,
        item_new_price: req.body.item_new_price,
        item_description: req.body.item_description,
        shipping: req.body.shipping,
        category: req.body.category,
        photo: req.body.photo,
        trending: req.body.trending,
    });
    data.save().then((data) => {
        res.status(201).json({
            status: 'succeeded',
            data,
            error: null
        });
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        });
    });

});

// Update document by id 
router.patch("/:id", (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let options = {
        new: true,
    }
    Model.findByIdAndUpdate(id, data, options).then((data) => {
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        });
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        });
    });
});

// Delete document by id
router.delete("/:id", (req, res) => {
    let id = req.params.id;
    Model.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            status: 'succeeded',
            data,
            error: null
        });
    }).catch((error) => {
        res.status(404).json({
            status: 'failed',
            data,
            error: error.message
        });
    });
});

module.exports = router;
