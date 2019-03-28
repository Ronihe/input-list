const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql:///inputs_db'
});

client.connect();

module.exports = client;
