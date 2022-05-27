const { Pool } = require('pg')
require("dotenv").config();

const pool = new Pool()
//  uses .env variables
//-----------------
//  PGHOST=""
//  PGPORT=""
//  PGDATABASE=""
//  PGUSERNAME=""
//  PGPASSWORD=""

module.exports = pool;
