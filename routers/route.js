const express = require("express");

const app = express();
const fs = require("fs");
const path = require("path");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
module.exports = app;
const router = express.Router();

const animes = require("./data");
router.get("/post", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "post.html"));
});

router.post("/post", async (req, res) => {
  const { animetitle, animeauthor, rating } = req.body;
  const newanime = {
    title: animetitle,
    author: animeauthor,
    rating: rating
  };

  await animes.insertOne(newanime);
  res.status(201);

});
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "search.html"));
});
router.get("/animelist", async (req, res) => {
  const q = req.query.anime;
  if (q) {
    const filteritem = await animes.find({ title: q });
    res.json(filteritem);
  }
});

module.exports = router;
