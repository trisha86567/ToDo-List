import React, { useState,useContext, useEffect } from 'react';
import ToDoContext from '../context/TodoContext';

function Register(props) {
  const {message,registerUser,setMessage}=useContext(ToDoContext);
  const [formData,setFormData]=useState(null);
 
    const handleChange=(e)=>{
       const{name,value,}=e.target;
       setFormData((prev)=>({
        ...prev,
        [name]:value
       }));     

      }
      


       const onSubmit= async(e)=>{
        e.preventDefault();
        registerUser(formData);
        
       
        };
        useEffect(()=>{
          setMessage("")
        },[])







    return (
        <form>
             <div className="mb-3">
          <label>Name</label>
          <input
            type="name"
            name="username"
            className="form-control"
            placeholder="Enter Name"
            onChange={handleChange}
          />
       </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <p>{message}</p>
        <div className="d-grid">
          <button type="Register" className="btn btn-primary" onClick={onSubmit}>
            Register
          </button>
        </div>
        
      </form>
 
    );
}

export default Register;