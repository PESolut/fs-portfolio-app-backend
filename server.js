// DEPENDENCIES
const app = require("./app.js");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

