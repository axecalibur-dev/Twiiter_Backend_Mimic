const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const { DB } = require("./config/config");
const app = require("./app");
// MongoDB CONNECTION STRING
const DATABASE_CONN_STRING = process.env.MONGO_URI || DB;
if (!DATABASE_CONN_STRING) {
  return console.log("Please insert MONGODB URI in environment");
}
mongoose
  .connect(DATABASE_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("\nDatabase connection failed\n");
  });
//
const PORT = process.env.PORT || 9098;

app.listen(PORT, () => {
  console.log(`Server starting on port : ${PORT}`);
});
