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
      <label>Employee ID</label>
      <input
       type="number" onChange={(event)=>{
        setEmployeeID(event.target.value);
      }}
      />

      <label>Employee First Name</label>
      <input 
      type="text" onChange={(event)=>{
        setFirstName(event.target.value);
      }}
      />

      <label>Employee Middle Name</label>
      <input 
      type="text" onChange={(event)=>{
        setMiddleName(event.target.value);
      }}
      />

      <label>Employee Last Name</label>
      <input 
      type="text" onChange={(event)=>{
        setLastName(event.target.value);
      }}
      />

      <label>Department</label>
      <input 
      type="text" onChange={(event)=>{
        setDepartment(event.target.value);
      }}/>

      <label>Manager ID</label>
      <input 
      type="number" onChange={(event)=>{
        setManagerID(event.target.value);
      }}
      />
      <label>Date of Joining</label>
      <input 
      type="date" onChange={(event)=>{
        setDate(event.target.value);
      }}
      />
      <button onClick={addEmployee}>Add Employee</button>
      <h1>Employee List</h1>
      {employeeList.map((val, key)=>{
        return (
          <div key={key}>
            <h2>{val.employeeID}</h2>
            <h2>{val.employeeFirstName}</h2>
            <h2>{val.employeeMiddleName}</h2>
            <h2>{val.employeeLastName}</h2>
            <h2>{val.department}</h2>
            <h2>{val.managerID}</h2>
            <h2>{val.joiningDate}</h2>
          </div>
        )
      })};

    </div>
  );
}

export default App;
