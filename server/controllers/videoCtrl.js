"use strict";
//video model
const Video = require("./../models/video");

exports.all = (req, res, next) => {
    Video.find({})
        .then((all) => {
            res.status(200).json(all);
        }).catch((err) => {
            res.status(500).json({ error: err });
        });

};
exports.show = (req, res, next) => {
    let videoId = req.params.videoId;
    Video.findById(videoId)
        .then((show) => {
            res.status(200).json(show);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};
exports.create = (req, res, next) => {
    let newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.save()
        .then((created) => {
            res.status(200).json(created);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};
exports.update = (req, res, next) => {
    let videoId = req.params.videoId;
    Video.findOneAndUpdate(videoId, {
        $set: {
            title: req.body.title,
            description: req.body.description,
            url: req.body.url
        }
    }, { new: true })
        .then((updated) => {
            res.status(200).json(updated);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

