const PORT = 3000;

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile("/src/index.html", {
    root: __dirname,
  });
});

app.get("/index.html", (req, res) => {
  res.sendFile("/src/index.html", {
    root: __dirname,
  });
});

app.get("/nosotros.html", (req, res) => {
  res.sendFile("/src/nosotros.html", {
    root: __dirname,
  });
});

app.get("/servicios.html", (req, res) => {
  res.sendFile("/src/servicios.html", {
    root: __dirname,
  });
});

app.get("/contactanos.html", (req, res) => {
  res.sendFile("/src/contactanos.html", {
    root: __dirname,
  });
});


app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto: http://localhost:${PORT}
  `);
});
