const express = require("express");
const ejs = require("ejs");
const multer = require("multer");
const nodemailer = require("nodemailer");

const app = express();
const path = require("path");

const tshirts = require("./tshirt_api");
const hoodies = require("./hoodie_api");

// DB connection
require("./src/db/conn");
const register = require("./src/models/registers");
const messages = require("./src/models/messages");

const port = process.env.PORT || 3001;

//Public Static Path

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));

const partials_path = path.join(__dirname, "../views/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

// //Routing
app.get("/", (req, res) => {
  res.render("home");
});

//home
app.get("/home", (req, res) => {
  res.render("home", {tshirts:tshirts});
});

//tshirt
app.get("/tshirt", (req, res) => {
  res.render("home", { tshirts: tshirts });
});

//hoodie
app.get("/hoodie", (req, res) => {
  res.render("hoodie", { hoodies: hoodies });
});

//error404
app.get("*", (req, res) => {
  res.render("error404");
});

//Listening to the port
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
