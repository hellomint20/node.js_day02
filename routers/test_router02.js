const express = require('express');
const member = require('../db/memberDAO');
const router = express.Router();

const ctrl = require("../controller/test_controller");

router.get('/', ctrl.index);

router.get("/test1", ctrl.test1);

router.get("/test2", ctrl.test2);

module.exports = router;