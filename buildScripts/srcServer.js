const express = require("express");
const path = require("path");
const open = require("open");
const port = 8999;
const app = express();

const apit = 'http://www.omdbapi.com/?apikey=2da3d653&t='; //search vs. find api
const apis = 'http://www.omdbapi.com/?apikey=2da3d653&s=';

const axios = require("axios");



app.get("/", (req, res) => {res.sendFile(path.join(__dirname,"../src/index.html"));});

app.get("/get/:title", (req, res) => {axios.get(apit + req.param("title")).then(response => res.send(response.data))});

app.get("/search/:title", (req, res) => {axios.get(apis + req.param("title")).then(response => res.send(response.data))});

app.listen(port, (err) => {if(err){console.log(err);} else{open("http://localhost:" + port)}});

