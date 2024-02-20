
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();

  const history = useNavigate();

  const [employee, setEmployee] = useState({
    emailId: "",
    passwd: ""
  })
  const { emailId, passwd } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const sumitHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/updateemployee/${id}`, employee)
    history("/readempl");
  };

  //save data in list
  const getEmployeeBiId = async () => {
    const result = await axios.get(`http://localhost:8080/employee/${id}`)
    setEmployee(result.data);
  };

  useEffect(() => {
    getEmployeeBiId();
  }, []);

  return (
    <div>
      <Form onSubmit={(e) => sumitHandler(e)}>
        <div className="mb-3">
          <div className="d-flex justify-content-between m-3">
            <h2>Edit Employee </h2>
            <Link to="/readempl">
              <Button variant="primary">Show data</Button>
            </Link>
          </div>
          <div>
            <label>EmailId</label>
            <input type="email" name="emailId" value={emailId} onChange={(e) => onInputChange(e)} />
          </div>
          <div>
            <label>Passwd</label>
            <input type="password" name="passwd" value={passwd} onChange={(e) => onInputChange(e)} />
          </div>
          <Button type="submit">submit</Button>
          <Link to="/readempl">
            <Button variant="primary">cancel</Button>
          </Link>
        </div>
      </Form>
    </div>
  );

}

export default EditEmployee
