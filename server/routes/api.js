"use strict";
const express = require("express");
const router = express.Router();
const videoCtrl = require("./../controllers/videoCtrl");

router.get("/videos", videoCtrl.all);
router.get("/video/:videoId", videoCtrl.show);
router.post("/video/create", videoCtrl.create);
router.put("/video/:videoId", videoCtrl.update);

module.exports = router;