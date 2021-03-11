const express = require("express");
const app = express();
app.use(express.json());

//ADDING CSS TO THE SERVER
app.use(express.static(__dirname + "/stylesheet"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/content", (req, res) => {
    res.sendFile(__dirname + "/public/content.html");
});

app.get("/aboutme", (req, res) => {
    res.sendFile(__dirname + "/public/aboutme.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Server running on port", Number(PORT));
    }
});