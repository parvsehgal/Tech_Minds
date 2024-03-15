const express = require("express");
const router = express.Router();

const { assistenHandler, engagement } = require('../controllers/festureControllers.js')

router.post('/assistent', assistenHandler)
router.get('/dailyTip', engagement)

router.post('/imageClassifier', (req, res) => {
  res.json('in classifier route', engagement)
})

module.exports = router;
