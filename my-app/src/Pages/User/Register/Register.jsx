import background from "../assets/userbackground.png"

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

function Register() {
  
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    date:'',
    phoneNumber:'',
    email:'',
    password:'',
  })

  const handleSubmit =(e)=>{
    e.preventDefault();
    axios
      .post("https://www.smarketp.somee.com/api/Account/register",{
        email:formData.email,
        password:formData.pass,
        firstname:formData.firstname,
        lastname:formData.lastname,
        phoneNumber:formData.phoneNumber,
        date:formData.date,

      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  // const handleShowPass = () =>{
  //   setFormData({
  //     ...formData,
  //     showPassword: !formData.password
  //   })
  // }

  return <>
    <div className="Register d-flex">
      <div className="left d-flex flex-column justify-content-center align-items-center" data-aos="fade-right">
        <div className="login-form">
          <header className="mb-4">
            <h3 className="fw-bold fs-1 text-center">Welcome</h3>
            <p className="fs-3 fst-italic text-black-50 text-center">Ship Smarter Today</p>
          </header>
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <div className="d-flex">
              <label htmlFor="firstname">Enter First Name<span className="d-block text-danger">*</span></label>
              <div className="email d-flex align-items-center mt-1 my-3">
                <MdEmail className="fs-5 text-black-50"/>
                <input 
                  type="text" 
                  name="firstname" 
                  placeholder="Omar"
                  value={formData.firstname}
                  onChange={(e) => setFormData({...formData, firstname:e.target.value})}
                />
              </div>
              <label htmlFor="lastname">Enter Last Name<span className="text-danger">*</span></label>
              <div className="email d-flex align-items-center mt-1 my-3">
                <MdEmail className="fs-5 text-black-50"/>
                <input 
                  type="text" 
                  name="firstname" 
                  placeholder="Omar"
                  value={formData.lastname}
                  onChange={(e) => setFormData({...formData, lastname:e.target.value})}
                />
              </div>
            </div>
            <div className="d-flex">
              <label htmlFor="birthday">Enter Your Data<span className="text-danger">*</span></label>
              <div className="email d-flex align-items-center mt-1 my-3">
                <MdEmail className="fs-5 text-black-50"/>
                <input 
                  type="date" 
                  name="date" 
                  placeholder="11/4/2001"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date:e.target.value})}
                />
              </div>
              <label htmlFor="phone">Enter Phone<span className="text-danger">*</span></label>
              <div className="email d-flex align-items-center mt-1 my-3">
                <MdEmail className="fs-5 text-black-50"/>
                <input 
                  type="phone" 
                  name="phoneNumber" 
                  placeholder="01013477824"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber:e.target.value})}
                />
              </div>
            </div>
            <label htmlFor="email">Enter Email<span className="text-danger">*</span></label>
            <div className="email d-flex align-items-center mt-1 my-3">
              <MdEmail className="fs-5 text-black-50"/>
              <input 
                  type="email" 
                  name="email" 
                  placeholder="ommar@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email:e.target.value})}
                  required
                />
            </div>
            <div className="d-flex">
              <label htmlFor="password">Enter password<span className="text-danger">*</span></label>
              <div className="password d-flex align-items-center mt-1 my-3">
                <RiLockPasswordFill className="fs-5 text-black-50"/>
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password:e.target.value})}
                />
              </div>
              <label htmlFor="confirmpassword">Re-Enter password<span className="text-danger">*</span></label>
              <div className="password d-flex align-items-center mt-1 my-3">
                <RiLockPasswordFill className="fs-5 text-black-50"/>
                <input 
                  type="password"
                />
              </div>
            </div>
            <button type="submit" className="btn primary-color rounded-3 text-white mb-3 fw-bold">Register</button>
          </form>
          <div className="register d-flex justify-content-center">
            <p>have account?</p>
            <Link to="/login" className="orange">Login</Link>
          </div>
        </div>
      </div>
      <div className="right" data-aos="fade-left">
        <img src={background} alt="" />
      </div> 
    </div>
  </>;
}
export default Register;
