
const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    employeeID: {
        type: Number,
        required: true,
    },
    employeeFirstName: {
        type: String,
        required: true,
    },
    employeeMiddleName: {
        type: String,
    },
    employeeLastName: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    managerID: {
        type: Number,
        required: true,
    },
    joiningDate: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

const Employee = mongoose.model("Employee",employeeSchema);
module.exports = Employee;