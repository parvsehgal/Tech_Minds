const express = require("express");
const router = express.Router();

const {assistenHandler} = require('../controllers/festureControllers.js')

router.post('/assistent',assistenHandler)

router.post('/imageClassifier' , (req,res)=>{
  res.json('in classifier route')
})

module.exports = router;
