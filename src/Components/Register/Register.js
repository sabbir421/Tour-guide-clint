import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const {signUpUsingEmail}=useAuth()

    const handleFormSubmit=(e)=>{
        e.preventDefault()
        signUpUsingEmail(email,password)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);

    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);

    }
  return (
    <div className="row">
        <div className="col-md-4 m-auto shadow p-4 border-2">
       
      <Form onSubmit={handleFormSubmit} className="border-2">
          <h3 className="text-center">Please Register</h3>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
          <Form.Control
            className="loginBtn w-25 my-2 "
            type="submit"
            placeholder="Password"
          />
          <Link className='d-flex justify-content-center bg-warning rounded p-2' to='/login'>Alredy have Account log in</Link>
        </Form.Group>
      </Form>
    </div>
    
       
    </div>
  );
};

export default Register;
