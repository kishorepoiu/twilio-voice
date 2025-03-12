require("dotenv").config();
const express = require("express");
const { twiml } = require("twilio");

const app = express();
app.use(express.urlencoded({ extended: false }));

// Handle incoming voice calls from Twilio
app.post("/voice", (req, res) => {
  const response = new twiml.VoiceResponse();
  response.say("Hello world!");

  res.type("text/xml");
  res.send(response.toString());
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
