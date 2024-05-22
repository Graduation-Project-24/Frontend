/* eslint-disable jsx-a11y/anchor-is-valid */
import background from "../assets/userbackground.png"

import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {

  const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 3000));

  const [values, setValues] = useState({
    email:'',
    password:'',
    showPassword:false
  })

  const handleShowPass = () =>{
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  let goHome =()=>{
    window.location.href ="/"
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    axios
      .post("https://www.smarketp.somee.com/api/Account/login",{
        email:values.email,
        password:values.password
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('userToken', token);
        toast.success("Login Success !")
        setTimeout(goHome,1000)
      })
      .catch((err) => 
        toast.error("Login Failed")
      )
  }

  return <>
    <div className="login d-flex">
        <ToastContainer
          theme="dark"/>
        <div className="left" data-aos="fade-right">
          <img className="" src={background} alt="" />
        </div>  
        <div className="right d-flex flex-column justify-content-center align-items-center" data-aos="fade-left">
          <div className="login-form">
            <header className="mb-4">
              <h3 className="fw-bold fs-1 text-center">Welcome</h3>
              <p className="fs-3 fst-italic text-black-50 text-center">Ship Smarter Today</p>
            </header>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <label htmlFor="email">Enter Email<span className="text-danger">*</span></label>
              <div className="email d-flex align-items-center mt-1 my-3">
                <MdEmail className="fs-5 text-black-50"/>
                <input 
                  className="" 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  value={values.email}
                  onChange={(e) => setValues({...values, email:e.target.value})}
                  required
                />
              </div>
              <label htmlFor="password">Enter password<span className="text-danger">*</span></label>
              <div className="password d-flex align-items-center mt-1 my-3">
                <RiLockPasswordFill className="fs-5 text-black-50"/>
                <input 
                  type={values.showPassword ? "text" : "password"}
                  name="password" 
                  value={values.pass}
                  placeholder="Password" 
                  onChange={(e) => setValues({...values, password:e.target.value})}
                  required
                />
                <span className="eye" onClick={handleShowPass}><FaEye className="fs-5 text-black-50"/></span>
              </div>
              <a href="#" className="text-black-50 text-end mb-3">Forget your password?</a>
              <button 
                type="submit" 
                onSubmit={handleSubmit} 
                className="btn primary-color rounded-3 text-white mb-3 fw-bold"
                >Login</button>
            </form>
            <div className="line d-flex">
              <p className="text text-black-50 mb-0 text-center">OR</p>
            </div>
            <div className="links d-flex justify-content-center my-3 gap-3">
              <a href="#" className="link"><FaGoogle /></a>
              <a href="#" className="link"><FaFacebookF/></a>
              <a href="#" className="link"><FaApple/></a>
            </div>
            <div className="register d-flex justify-content-center">
              <p>Don't have account?</p>
              <Link to="/register" className="orange">Register Now</Link>
            </div>
            <div className="admin">
            <Link to="/user/register" className="text-black d-block text-center">Admin</Link>
            </div>
          </div>
        </div>
    </div>
  </>;
}
export default Login;
