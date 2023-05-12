const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs')

app.get("/", (req,res)=>{

    var today = new Date();
    var currentDay = today.getDay();
    var currentDate = today.getDate();
    var currentMonth = today.getMonth();
    var day = "";
    
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;

        default:
        console.log("Error: Current day is equal to:" + currentDay);
}
        // Array of month names
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        var currentMonthName = monthNames[currentMonth];

    res.render("list", {
        kindOfDay: day,
        kindOfDate: currentDate,
        kindOfMonth: currentMonthName
    });  
    
}).listen(3000, ()=>{
    console.log("Server running on the PORT 3000");
})  