const express = require("express");
const path = require("path");

const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/assets/html/index.html"))
    console.log(req.query)
});

app.listen(port, () => {
    console.log(`Server running at localhost:${port}`)
});

// https://hackernoon.com/the-definitive-guide-to-express-the-node-js-web-application-framework-649352e2ae87
