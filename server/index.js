const express = require('express')
const cors = require('cors')
const app = express();
require("dotenv").config();
const fileupload = require("express-fileupload");
app.use(express.json());
const featureRoutes = require('./routes/featureRoutes.js')

app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use('/api/v1', featureRoutes)

app.post('/test', (req, res) => {
  res.json('sucess')
})

app.listen(process.env.PORT, () => {
  console.log('server started at port ' + `${process.env.PORT}`)
})
