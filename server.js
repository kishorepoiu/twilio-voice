require("dotenv").config();
const express = require("express");
const { twiml } = require("twilio");

const app = express();
app.use(express.urlencoded({ extended: false }));

// Default route to check if the server is running
app.get("/", (req, res) => {
  res.send("Twilio Voice App is running! 🚀");
});

// Twilio webhook for voice calls
app.post("/voice", (req, res) => {
  const response = new twiml.VoiceResponse();
  response.say("Hello world!");

  res.type("text/xml");
  res.send(response.toString());
});

// Export for Vercel
module.exports = app;
