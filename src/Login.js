    import { Button } from "@mui/material";
    import React,{useState} from "react";
    import { useForm } from "react-hook-form";
    import "./App.css";
    import {useNavigate} from "react-router-dom";
    import axios from "axios";





    function Login() {
        const [first,setFirst]= useState({
            email:"",
            password:"",
        })
        const {
            data,
        register,
        formState: { errors },
        
    } = useForm();    
    let navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        let resdata= await axios.post("https://products-jwt.onrender.com/users/login",first)
        const userData = localStorage.setItem("mykey",JSON.stringify(resdata))
        console.log(userData);

        console.log(first)


        navigate("/Table")
         if (userData) {
           if (userData.password === data.password) {
             console.log(userData.name + " You Are Successfully Logged In");
           } else {
             console.log("Email or Password is not matching with our record");
           }
         } else {
           console.log("Email or Password is not matching with our record");
         }
        
        
    };
    return (
        <div>
    
        <div> <p className="title">Welcome To Ashray Foundation  <h5>Login</h5></p>
        </div>
        <form className="App">
            <input
            
            type="email" placeholder="Enter Your Email-Id" 
            value={first.email} id="email" 
            onChange={(e)=>{setFirst({...first,email:e.target.value},{ required: "Please Enter Your Email!",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                message: "Please Enter A Valid Email!"
            }})}}  />
            <br/>            
            <input type="password"  
             placeholder="Remember Your password" value={first.password} 
              onChange={(e)=>{setFirst({...first,password:e.target.value},
                {  required: "Please Enter Your Password",
              minLength: {
              value: 8,
              message: "Password must be at least 8 characters long!"
              }})}} />

            <h6>If New Register<Button onClick={()=>navigate("/Register")} >Here?</Button></h6>
            <input type={"submit"}  onClick={(e)=>handleSubmit(e)} style={{ backgroundColor: "#a1eafb",maxWidth:'100px',marginLeft:'10em' }} />
        </form>
        
        </div>
        
    
    );
    }
    export default Login;