const express = require("express");
const app = express();
const port = process.env.PORT || 4600;
const axios = require("axios");

app.set("view engine", "hbs");

app.use(express.static(__dirname + "views"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

app.get("/movieData", (req, res) => {
  res.render("index");
});

app.post("/movieData", (req, res) => {
  let dataToFind = req.body.moviename;
  axios
    .get("http://www.omdbapi.com/?s=" + dataToFind + "&apikey=32927c6b")
    .then(response => {
      res.render("index", { data: response.data.Search });
    });
});

app.listen(port, () => {
  console.log(`app run om port${port}`);
});
