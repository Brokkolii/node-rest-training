const app = require("../app");
const db = require("../db/index");

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
      response.send(err);
    }
  })
});