const express = require("express");
const app = express();
app.use(express.json());


//GETTING THE HTML PAGE FROM THE PUBLIC FOLDER
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

//GETTING ANOTHER HTML PAGE
app.get("/details", (req, res) => {
    res.sendFile(__dirname + "/public/details.html");
});


app.listen(5000, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", 5000);
});