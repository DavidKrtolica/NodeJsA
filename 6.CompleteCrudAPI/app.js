const express = require("express");
const app = express();
app.use(express.json());

//DEFINING BIKES DATA
const bikes = [
    {
        id: 1,
        name: "Trek",
        size: "XL"
    },
    {
        id: 2,
        name: "Cannondale",
        size: "L"
    },
    {
        id: 3,
        name: "Cube",
        size: "M"
    },
    {
        id: 4,
        name: "Trek",
        size: "S"
    }
]


//FIRST PAGE
app.get("/", (req, res) => {
    res.send("<h1>Welcome to my bike shop!</h1>To see our offer, write \"/bikes\" in the URL.");
});

//GET REQUEST TO GET ALL BIKES /w OPTIONAL BRAND QUERY PARAM
app.get("/bikes", (req, res) => {
    let searchedBikes = [];
    bikes.map(bike => {
        if (req.query.name == bike.name || req.query.name == bike.name.toLowerCase()) {
            searchedBikes.push(bike);
        }
    });
    if (searchedBikes.length === 0) {
        res.send(bikes);
    } else {
        res.send(searchedBikes);
    }
});

//GET REQUEST WITH OPTION TO PASS ID PATH VARIABLE
app.get("/bikes/:id", (req,res) => {
    bikes.map(bike => {
        if (req.params.id == bike.id) {
            res.send(bike);
        }
    });
});


app.listen(8080);