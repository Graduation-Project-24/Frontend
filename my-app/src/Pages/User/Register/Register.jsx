import background from "../assets/userbackground.png";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Register() {
  
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    date:'',
    phoneNumber:'',
    email:'',
    password:'',
    confirmPassword:'',
    showPassword:false
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const payload = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      date: formData.date,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      password: formData.password,
    };

    let goLogin =()=>{
      window.location.href ="/"
    }

    axios
      .post("https://www.smarketp.somee.com/api/Account/register", payload, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(() => {
        toast.success("Registration Successful!")
        setTimeout(goLogin,1000)
      }
      )
      .catch((err) => {
        console.error("Registration error:", err.response);
        if (err.response && err.response.data) {
          toast.error(`Registration Failed: ${err.response.data.message}`);
        } else {
          toast.error("Registration Failed. Please try again.");
        }
      });
  };

  const handleShowPass = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword
    });
  };

  return (
    <>
      <ToastContainer theme="dark"/>
      <div className="register d-flex justify-content-between ">
        <div className="left d-flex flex-column justify-content-center " data-aos="fade-right">
          <div className="login-form">
            <header className="mb-4">
              <h3 className="fw-bold fs-1 text-center">Welcome To Smarket</h3>
              <p className="fs-3 fst-italic text-black-50 text-center">Shop Smarter Today</p>
            </header>
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <div className="d-flex justify-content-between">
                <div>
                  <label htmlFor="firstname">Enter First Name<span className="text-danger">*</span></label>
                  <div className="email d-flex align-items-center mt-1 my-3">
                    <MdEmail className="fs-5 text-black-50"/>
                    <input 
                      type="text" 
                      name="firstname" 
                      placeholder="Omar"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastname">Enter Last Name<span className="text-danger">*</span></label>
                  <div className="email d-flex align-items-center mt-1 my-3">
                    <MdEmail className="fs-5 text-black-50"/>
                    <input 
                      type="text" 
                      name="lastname" 
                      placeholder="El-Nahas"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <label htmlFor="email">Enter Email<span className="text-danger">*</span></label>
                  <div className="email d-flex align-items-center mt-1 my-3">
                    <MdEmail className="fs-5 text-black-50"/>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="omar@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone">Enter Phone<span className="text-danger">*</span></label>
                  <div className="email d-flex align-items-center mt-1 my-3">
                    <MdPhone className="fs-5 text-black-50"/>
                    <input 
                      type="tel" 
                      name="phoneNumber" 
                      placeholder="0123456789"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <label htmlFor="password">Enter Password<span className="text-danger">*</span></label>
                  <div className="password d-flex align-items-center mt-1 my-3">
                    <RiLockPasswordFill className="fs-5 text-black-50"/>
                    <input 
                      type={formData.showPassword ? "text" : "password"}
                      name="password" 
                      value={formData.password}
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                    <span className="eye" onClick={handleShowPass}><FaEye className="fs-5 text-black-50"/></span>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmpassword">Re-Enter Password<span className="text-danger">*</span></label>
                  <div className="password d-flex align-items-center mt-1 my-3">
                    <RiLockPasswordFill className="fs-5 text-black-50"/>
                    <input 
                      type={formData.showPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm Password"  
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <span className="eye" onClick={handleShowPass}><FaEye className="fs-5 text-black-50"/></span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <label htmlFor="date">Enter Date<span className="text-danger">*</span></label>
                <div className="email d-flex align-items-center mt-1 my-3">
                  <MdEmail className="fs-5 text-black-50"/>
                  <input 
                      type="date" 
                      name="date" 
                      placeholder="11/4/2001"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                </div>
              </div>
              <button type="submit" className="btn primary-color rounded-3 text-white mb-3 fw-bold">Register</button>
            </form>
            <div className="d-flex justify-content-center">
              <p>Have an account? </p>
              <Link to="/" className="text-info ms-1">Login</Link>
            </div>
          </div>
        </div>
        <div className="right" data-aos="fade-left">
          <img className="" src={background} alt="Background" />
        </div> 
      </div>
    </>
  );
}

export default Register;
