//Open your web browser and go to http://localhost:9090/shorten?url=https://blog.javascripttoday.com.

import express from "express";
import shortid from "shortid";

const port = 9090;

const app = express();
const urls = {};

app.get("/shorten", (req, res) => {
  const url = req.query.url;
  const id = shortid.generate();

  urls[id] = url;
  res.send(`http://localhost:${port}/${id}`);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const url = urls[id];

  if (url) res.redirect(url);
  else res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
