import react from "react"; 
import Axios from "axios";
import React, { useEffect, useState } from "react";
import './App.css';

function App() {

  const [employeeID, setEmployeeID] = useState(0);
  const [employeeFirstName, setFirstName] = useState("");
  const [employeeMiddleName, setMiddleName] = useState("");
  const [employeeLastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [managerID, setManagerID] = useState(0);
  const [joiningDate, setDate] = useState(new Date());

  const [employeeList, setEmployeeList] = useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then((response)=>{
      setEmployeeList(response.data);
    });
  },[]);


  const addEmployee = ()=>{
    Axios.post("http://localhost:3001/insert", {
      employeeID: employeeID,
      employeeFirstName: employeeFirstName,
      employeeMiddleName: employeeMiddleName,
      employeeLastName: employeeLastName,
      department: department,
      managerID: managerID,
      joiningDate: joiningDate,
  })
  };

  return (
    <div className="App">
      <h1>CRUD Application</h1>
      <div class="entry">
      <label>Employee ID</label>
      <input
       type="number" onChange={(event)=>{
        setEmployeeID(event.target.value);
      }}
      /> </div>
      <div class="entry">
      <label>Employee First Name</label>
      <input 
      type="text" onChange={(event)=>{
        setFirstName(event.target.value);
      }}
      /> </div>
      <div class="entry">
      <label>Employee Middle Name</label>
      <input 
      type="text" onChange={(event)=>{
        setMiddleName(event.target.value);
      }}
      />
      </div>
      <div class="entry">
      <label>Employee Last Name</label>
      <input 
      type="text" onChange={(event)=>{
        setLastName(event.target.value);
      }}
      />
      </div>
      <div class="entry">
      <label>Department</label>
      <input 
      type="text" onChange={(event)=>{
        setDepartment(event.target.value);
      }}/>
      </div>
      <div class="entry">
      <label>Manager ID</label>
      <input 
      type="number" onChange={(event)=>{
        setManagerID(event.target.value);
      }}
      />
      </div>
      <div class="entry">
      <label>Date of Joining</label>
      <input 
      type="date" onChange={(event)=>{
        setDate(event.target.value);
      }}
      />
      </div>
      
      <button onClick={addEmployee} class="add-button">Add Employee</button>
      <h1>Employee List</h1>
      <table>
         <tr>
            <th class="list-header">Employee ID</th>
            <th class="list-header">Employee First Name</th>
            <th class="list-header">Employee Middle Name</th>
            <th class="list-header">Employee Last Name</th>
            <th class="list-header">Department</th>
            <th class="list-header">Manager ID</th>
            <th class="list-header">Joining Date</th>
            <th class="list-header"></th>
         </tr>
      {employeeList.map((val, key)=>{
        return (
         <tr>
            <td class="list-content">{val.employeeID}</td>
            <td class="list-content">{val.employeeFirstName}</td>
            <td class="list-content">{val.employeeMiddleName}</td>
            <td class="list-content">{val.employeeLastName}</td>
            <td class="list-content">{val.department}</td>
            <td class="list-content">{val.managerID}</td>
            <td class="list-content">{val.joiningDate}</td>
         </tr>
        )
      })};
      </table>
    </div>
  );
}

export default App;
