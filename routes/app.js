const express = require("express");

const appController = require("../controller/app");

const router = express.Router();

router.post("/", appController.app);


module.exports = router;