import background from "../assets/userbackground.png"

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


function Register() {
  
  return <>
    <div className="Register d-flex">
      <div className="left d-flex flex-column justify-content-center align-items-center" data-aos="fade-right">
        <div className="login-form">
          <header className="mb-4">
            <h3 className="fw-bold fs-1 text-center">Welcome</h3>
            <p className="fs-3 fst-italic text-black-50 text-center">Ship Smarter Today</p>
          </header>
          <form className="d-flex flex-column">
            <label htmlFor="firstname">Enter First Name<span className="text-danger">*</span></label>
            <div className="email d-flex align-items-center mt-1 my-3">
              <MdEmail className="fs-5 text-black-50"/>
              <input type="text" name="firstname" placeholder="Omar" />
            </div>
            <label htmlFor="firstname">Enter Last Name<span className="text-danger">*</span></label>
            <div className="email d-flex align-items-center mt-1 my-3">
              <MdEmail className="fs-5 text-black-50"/>
              <input type="text" name="firstname" placeholder="EL-Nahas" />
            </div>
            <label htmlFor="email">Enter Email<span className="text-danger">*</span></label>
            <div className="email d-flex align-items-center mt-1 my-3">
              <MdEmail className="fs-5 text-black-50"/>
              <input className="" type="email" name="email" placeholder="Email" />
            </div>
            <label htmlFor="phone">Enter Phone<span className="text-danger">*</span></label>
            <div className="email d-flex align-items-center mt-1 my-3">
              <MdEmail className="fs-5 text-black-50"/>
              <input type="tel" name="phone" placeholder="+20 12345678" />
            </div>
            <label htmlFor="password">Enter password<span className="text-danger">*</span></label>
            <div className="password d-flex align-items-center mt-1 my-3">
              <RiLockPasswordFill className="fs-5 text-black-50"/>
              <input className="" type="password" name="password" placeholder="Password" />
            </div>
            <label htmlFor="confirmpassword">Re-Enter password<span className="text-danger">*</span></label>
            <div className="password d-flex align-items-center mt-1 my-3">
              <RiLockPasswordFill className="fs-5 text-black-50"/>
              <input className="" type="password" name="confirmpassword" placeholder="Re-Enter password" />
            </div>
            <button type="submit" className="btn primary-color rounded-3 text-white mb-3 fw-bold">Register</button>
          </form>
          <div className="register d-flex justify-content-center">
            <p>have account?</p>
            <a href="#" className="orange">Login</a>
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
