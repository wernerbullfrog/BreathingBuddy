const path = require("path");
const express = require("express");

const PORT = 8000;

const app = express()
  .use(express.json())
  // endpoints

  .listen(PORT, function () {
    console.info("listening on port " + PORT);
  });
