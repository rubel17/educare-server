const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 5000;

const allCourses = require("./Data/product.json");

app.get("/", (req, res) =>{
    res.send("No Data Available");
});
app.get("/allCourses", (req, res) =>{
    res.send(allCourses);
});
app.get("/course/:id", (req, res) =>{
    const id = req.params.id;
    const singleCourse = allCourses?.find((c) => c.id == id);
    if(!singleCourse){
        res.send("No Data Found");
    }

    res.send(singleCourse);
});

app.listen(port, () =>{
    console.log("Server Is Running",port);
});

module.exports = app;