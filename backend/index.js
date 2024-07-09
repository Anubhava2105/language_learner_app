const connectToMongo = require("./Database/db");
const express = require("express");
const app = express();
connectToMongo();
const port = 5000 || process.env.PORT;
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/user/auth", require("./routes/User Api/userCredential"));
app.use("/api/admin/auth", require("./routes/Admin Api/adminCredential"));
app.use("/api/user/details", require("./routes/User Api/userDetails"));
app.use("/api/admin/details", require("./routes/Admin Api/adminDetails"));


app.listen(port, () => {
  console.log(`Server Listening On http://localhost:${port}`);
});
