const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport();

// For handling preflight request
const isPreflight = req => {
  const isHttpOptions = req.method === "OPTIONS";
  const hasOriginHeader = req.headers["origin"];
  const hasRequestMethod = req.headers["access-control-request-method"];
  return isHttpOptions && hasOriginHeader && hasRequestMethod;
};

// handleCors middleware
const handleCors = (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  if (isPreflight(req)) {
    console.log("Received a preflight request");
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "content-type");
    res.status(204).end();
    return;
  }
  next();
};

app.use(express.static("public"));
app.use(handleCors);
app.use(bodyParser.json());

app.post("/contact", (req, res, next) => {
  console.log(req.body);
  return res.json({
    message: "message received"
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(__dirname);
});
