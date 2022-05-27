const app = require("./app");
const config = require("./config");
const db = require("./db");


app.get('/', (request, response) => {
  response.status(200).send("Erfolgreich verbunden!");
});

app.get('/USERS', (request, response) => {
  const query = 'SELECT * FROM "USERS"';
  db.query(query, (err, res) => {
    console.log(err);
    console.log(res);
    try {
      const result = res.rows;
      response.status(200).send(result);
    } catch (err) {
      console.log(err);
      response.status(500);
    }
  })
});


app.listen(config.port, () => {
  console.log(`listening to http://localhost:${config.port}`)
})