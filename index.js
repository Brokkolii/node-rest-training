const express = require("express");
const app = express();
const config = require("./config");

//const cors = require('cors');
//app.use(cors({
//  origin: 'https://www.section.io'
//}));


app.get('/', (request, response) => {
  response.status(200).send({
    test: true,
  })
});


app.listen(config.port, () => {
  console.log(`listening to http://localhost:${config.port}`)
})