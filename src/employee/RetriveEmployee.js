
import React, { useState, useEffect } from 'react';
import {Table , Button} from 'react-bootstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';

const RetriveEmployee = () => {
    const[employees, setEmployees] = useState([]);
  
    //save data in list
       const getEmployee=async()=>{
          const result = await axios.get('http://localhost:8080/getemployee')
               console.log(result.data);   //data is array added object
               setEmployees(result.data);
       };

       useEffect(()=>{ // useEffect use to rerander only when change in getdata function
        getEmployee();
    },[]); 
   
const deleteEmployee = async(pkEmId)=>{
            await axios.delete(`http://localhost:8080/deleteemployee/${pkEmId}`)
           getEmployee();

}
  return (
    <div>
         <h1>Read empoyee</h1>
          <div className="d-flex justify-content-between m-3">
         <Link to = "/addempl">
         <Button variant="secondary">add Employee</Button>
         </Link>
         </div>
       <Table striped bordered hover>
       <thead>
         <tr>
           <th>pkEmId</th>
           <th>emailId </th>
           <th>passwd</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody >
       {
         employees.map((employee)=>{
             return(
             <tr>
              <td>{employee.pkEmId}</td>
             <td>{employee.emailId}</td>
             <td>{employee.passwd}</td>
             <td>
             <Button className = "btn btn-primary mx=3">view</Button>
             <Link className ="btn btn-outline-primary mx=5" to = {'/editemployee/${employee.id}'}>Edit</Link>
             <Button variant="danger mx=3" onClick={()=>deleteEmployee(employee.pkEmId)}>Delete</Button>
             </td>
              </tr>
                )})
       }
       </tbody>
     </Table>
     </div>
  );
}

export default RetriveEmployee
