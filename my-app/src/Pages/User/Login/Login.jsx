/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";

import background from "../assets/userbackground.png"

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import axios from 'axios';

function Login() {


  useEffect(() => {
    axios.get('https://www.smarketp.somee.com/swagger/v1/swagger.json/api/account/login')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return <>
    <div className="login d-flex">
        <div className="left" data-aos="fade-right">
          <img src={background} alt="" />
        </div>  
        <div className="right d-flex flex-column justify-content-center align-items-center" data-aos="fade-left">
          <div className="login-form">
            <header className="mb-4">
              <h3 className="fw-bold fs-1 text-center">Welcome</h3>
              <p className="fs-3 fst-italic text-black-50 text-center">Ship Smarter Today</p>
            </header>
            <form className="d-flex flex-column">
              <label htmlFor="email">Enter Email<span className="text-danger">*</span></label>
              <div className="email d-flex align-items-center mt-1 my-3">
                <MdEmail className="fs-5 text-black-50"/>
                <input className="" type="email" name="email" placeholder="Email" />
              </div>
              <label htmlFor="password">Enter password<span className="text-danger">*</span></label>
              <div className="password d-flex align-items-center mt-1 my-3">
                <RiLockPasswordFill className="fs-5 text-black-50"/>
                <input className="" type="password" name="password" placeholder="Password" />
              </div>
              <a href="#" className="text-black-50 text-end mb-3">Forget your password?</a>
              <button type="submit" className="btn primary-color rounded-3 text-white mb-3 fw-bold">Login</button>
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
