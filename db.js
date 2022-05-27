const { Pool } = require('pg')
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSERNAME,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})
//  uses .env variables
//-----------------
//  PGHOST=""
//  PGPORT=""
//  PGDATABASE=""
//  PGUSERNAME=""
//  PGPASSWORD=""

module.exports = pool;
