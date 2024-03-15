const express = require("express");
const router = express.Router();

const { assistenHandler, userEngagement } = require('../controllers/festureControllers.js')
const { classifier } = require('../controllers/fileControllers.js')
router.post('/assistent', assistenHandler)
router.get('/dailyTip', userEngagement)

router.post('/imageClassifier', classifier)

module.exports = router;
