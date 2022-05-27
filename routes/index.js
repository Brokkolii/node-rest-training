const app = require("../app");

app.get('/', (request, response) => {
  response.status(200).send({
    msg: "Erfolgreich verbunden!"
  });
});

require("./user");