const express = require("express");
const app = express();

//HOMEPAGE FOR THE TIME API
app.get("/", (req, res) => {
    res.send("<h1>Welcome to my Time API !</h1>To access the current time, write \"/time\".<br>To access the current day of the month,"
            +" write \"/day\".<br>For current month, write \"/month\".<br><br>It works in realtime, check by refresing the time :)");
});

app.get("/time", (req, res) => {
    res.send({currentTime: new Date().toLocaleTimeString()});
});

app.get("/day", (req, res) => {
    //MADE A LIST THAT CONTAINS ALL DAYS OF THE WEEK, THEN FETCHING IT THROUGH THE INDEX
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    res.send({currentDateInMonth: new Date().getDate(), currentDayOfWeek: dayOfWeek[new Date().getDay()]});
});

app.get("/month", (req, res) => {
    //SAME AS THE DAYS LIST, BUT WITH MONTHS - FETCHING CORRECT MONTH THROUGH THE INDEX
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    res.send({currentMonth: months[new Date().getMonth()]});
});

app.listen(8082);