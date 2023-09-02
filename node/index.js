const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Andre')`;
connection.query(sql);
connection.end();

app.get("/", (_req, res) => {
  query = connection.query(`SELECT name FROM people`);
  console.log(query);
  res.send("<h1>Full Cycle Rocks!</h1><ul>{query}</ul>");
});

app.listen(port, () => {
  console.log("rodando na porta", port);
});
