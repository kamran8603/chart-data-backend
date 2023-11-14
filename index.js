




const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const { JsonModel } = require('./model/data');
const config = require('./config')
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

console.log("URL", config.db.url);
mongoose.connect(config.db.url, {
  serverSelectionTimeoutMS: 30000
});

mongoose.connection
.on('error', err => {
  console.error(err);
})
.on('open', err => {
  console.log(`DB connected`);
})

app.use(express.json());
// app.set("view", "ejs");

app.get("/getChartData", async (req, res) => {
  try {
    const { year, topic } = req.query;
    const filter = {};

    if (year && year !== "All") {
      filter.year = year;
    }
    if (topic && topic !== "All") {
      filter.topics = topic;
    }

    const data = await JsonModel.find({});
    console.log("Data", data);
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    res.json(data);
  } catch (err) {
    console.error("MongoDB find error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

