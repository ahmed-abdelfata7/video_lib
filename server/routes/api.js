const express = require("express");
const router = express.Router();

router.get("/main", (req, res, next) => {
    res.send("Your Application is running");
});
module.exports = router;