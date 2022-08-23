const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const employeeModel = require("./models/Employee");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://shejal:shejal12345@crud.legj357.mongodb.net/Employee?retryWrites=true&w=majority", 
{
    useNewUrlParser: true,
});

app.post("/insert", async (req, res)=>{
    const employeeID= req.body.employeeID;
    const employeeFirstName= req.body.employeeFirstName;
    const employeeMiddleName= req.body.employeeMiddleName;
    const employeeLastName= req.body.employeeLastName;
    const department= req.body.department;
    const managerID= req.body.managerID;
    const joiningDate= req.body.joiningDate;

    const employee = new employeeModel({
        employeeID: employeeID, 
        employeeFirstName: employeeFirstName, 
        employeeMiddleName: employeeMiddleName, 
        employeeLastName: employeeLastName,
        department: department,
        managerID: managerID,
        joiningDate: joiningDate,
    });

    try{
        await employee.save();
        res.send("data inserted");
    }
    catch(err){
        console.log(err);
    }
});

app.get("/read", async (req, res)=>{
    employeeModel.find({}, (err, result)=>{
        if (err){
            res.send(err);
        }
        res.send(result);
    });  });

app.listen(3001, () => {
    console.log("Server running on port 3001...");
})