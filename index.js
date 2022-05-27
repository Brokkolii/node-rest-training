const app = require("./app");
const config = require("./config");

require("./routes/index");

app.listen(config.port, () => {
  console.log(`listening to http://localhost:${config.port}`)
})