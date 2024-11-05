const express = require('express');
// const { signup, login } = require('../controllers/PostController');
const router = express.Router();


router.post('/login', (req, res)=>{
    let info = {
        "api" : "GameAPI",
        "res" : req.body
    }
    res.status(200).json(info);
});

module.exports = router;