const express = require("express");
const mongoose = require("mongoose");
const app = express();

const employeeModel = require("./models/Employee");

app.use(express.json());

mongoose.connect("mongodb+srv://shejal:shejal12345@crud.legj357.mongodb.net/Employee?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
});

app.get("/", async (req, res)=>{
    const employee = new employeeModel({
        employeeID:100, 
        employeeFirstName:"Shejal", 
        employeeMiddleName:"", 
        employeeLastName:"Kushwaha",
        department: "Software",
        joiningDate: 2022-07-18,
    });

    try{
        await employee.save();
        res.send("data inserted");

    }
    catch(err){
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001...");
})