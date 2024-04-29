const express = require("express");
const db = require("./db/connection");
const app = express();
const bodyParser = require("body-parser");

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O app está ouvindo a porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//db connection
db.authenticate()
  .then(() => {
    console.log("Conectou-se ao banco de dados com sucesso");
  })
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar-se ao banco de dados");
  });

//routes
app.get("/", (req, res) => {
  res.send("Está funcionando");
});

//jobs routes
app.use("/jobs", require("./routes/jobs"));
