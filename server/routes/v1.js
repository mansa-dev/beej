
var express = require("express");
var router = express.Router();

router.use("/v1", require("../api"));


module.exports = router;
