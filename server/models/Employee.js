const mongoose = require(mongoose);


const employeeData = new mongoose.Schema({
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
    },
    joiningDate: {
        type: Date,
        required: true;
    }
});

const Employee = mongoose.model("EmployeeData",EmployeeSchema);
module.exports = Employee