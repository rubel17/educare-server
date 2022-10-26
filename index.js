const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const allCourses = require("./Data/product.json");

app.get("/", (req, res) =>{
    res.send("now server is running");
});
app.get("/allCourses", (req, res) =>{
    res.send(allCourses);
});
app.get("/course/:id", (req, res) =>{
    const id = req.params.id;
    const singleCourse = allCourses?.find((c) => c.id == id);
    if(!singleCourse){
        res.send("No data found");
    }

    res.send(singleCourse);
});

app.listen(Port, () =>{
    console.log("server is running",Port);
});

module.exports = app;