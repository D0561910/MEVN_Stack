const express = require('express');
const postRoute = express.Router();

let PostModel = require("../model/Post");
const Post = require('../model/Post');

// Create post
postRoute.route('/create-post').post((req, res, next) => {
    PostModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
        }
    })
})

module.exports = postRoute;