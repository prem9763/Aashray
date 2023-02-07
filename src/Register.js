import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function Register() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);
  
  let navigate=useNavigate()
  return (
    <div>
    <Box>
    
      <p className="title">Welcome To Ashray Foundation  <h5>Registration</h5></p>
       
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <input type="text" placeholder="Enter Your Full Name" {...register("name")} />
        </div>
        <div>
        <input type="email" id="email"
         placeholder="Enter Your Email-Id"
         {...register("email", { required: true,pattern:{value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
        message: "Please Enter A Valid Email!"} } )} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        </div>
        <div>       
         <input placeholder="Enter password"
          type="password" id="password"
         {...register("password",{minLength: {
            value: 8,
            message: "Password must be at least 8 characters long!"
            }})} />
      </div>
      <h6>If Already Registered Login<Button onClick={()=>navigate("/")}>Here?</Button></h6>
      <div>
        <input  onClick={()=>{}} type={"submit"} style={{ backgroundColor: "#a1eafb",maxWidth:'100px',marginLeft:'1em' }} />
        </div>
        </form>
      </Box>
      </div>
  );
}
export default Register;
