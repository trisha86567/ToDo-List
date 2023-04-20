import React, { useState,loginUser, useContext,useEffect } from 'react';
import ToDoContext from '../context/TodoContext';

function Login(props) {
  const{message,loginUser,setMessage}=useContext(ToDoContext)
  const[formData,setFormData]= useState(null);
  
 
    
      const handleChange=(e)=>{
        const{name,value,}=e.target;
        setFormData((prev)=>({
         ...prev,
         [name]:value
        }));     
 
       }
       
 
 
        const onSubmit= async(e)=>{
         e.preventDefault();
         loginUser(formData);
     }
       
     useEffect(()=>{
      setMessage("");
    },[])
    

    return (
        
        <form>
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
          <button type="Login" className="btn btn-primary" onClick={onSubmit}>
            Login
          </button>
          </div>
      </form>
 
        
    );

    }
    

export default Login;
//string literal used in join the words wit space.