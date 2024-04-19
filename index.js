const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const PORT = 5000;
app.get("/route", (req, res) => {
  res.json({
    user: "badr moujahid",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
