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


const PORT = process.env.PORT || 8080

app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server running on port", Number(PORT));
});