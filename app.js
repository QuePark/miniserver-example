const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/data/dummy-news", async (req, res) => {
  const data = {
    data: require("./dummy.json"),
  };
  res.status(200).json(data).end();
});

app.get("/data/mini-weather", async (req, res) => {
  res.status(200).json({ status: "sunny", tempature: "19", finedust: "good" }).end();
});

const server = app.listen(5000);

console.log("http://localhost:5000/data/latestNews 에서 뉴스를 얻을 수 있습니다");
console.log("http://localhost:5000/data/weather 에서 날씨를 얻을 수 있습니다");

module.exports = {
  app,
  server,
};