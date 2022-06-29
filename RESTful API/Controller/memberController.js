const express = require('express');
const Model = require("../Model/memberModel");
const router = express.Router();
const {verifyToken} = require("../lib/utils");

// Get all collections 
router.get("/", verifyToken ,(req, res) => {
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

// Example with Async/Await
// router.get("/", async (req, res) => {
//    try{
//     const data = await Model.find();
//     res.status(200).json({
//         status: 'succeeded',
//         data,
//         error: null
//     });

//    }catch(error){
//     res.status(404).json({
//         status: 'failed',
//         data,
//         error: error.message
//     })
//    }
// });

// Get doc by id
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

// Post document 
router.post("/", (req, res) => {
    // res.send(`POST document`);
    const data = new Model({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        pronouns: req.body.pronouns,
        email: req.body.email,
        phone: req.body.phone,
        twitch_account: req.body.twitch_account,
        photo: req.body.photo,
        birth_day: req.body.birth_day,
        birth_month: req.body.birth_month,
        birth_year: req.body.birth_year,
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
