const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();

const url = process.env.DB_URL;
const client = new MongoClient(url);

let _db;

async function injectDB() {
  if (_db) {
    return _db;
  }

  const connectedClient = await client.connect();
  const db = connectedClient.db(process.env.DB_NAME || "nothingtotrash");
  _db = db;
  return db;
}

module.exports = {
  injectDB
};
