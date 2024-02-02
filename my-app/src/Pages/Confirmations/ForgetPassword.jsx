import { Link } from "react-router-dom";
import "./Confirmations.css";

import { MdEmail } from "react-icons/md";

function ForgetPassword() {
  return <>
    <div className="forget_password py-5 my-3">
      <div className="container">
        <div className="title text-center">
          <h2 className="fs-1 py-5">Forget Password</h2>
          <p className="text-black-50">Please Type your email to send for you request to change password</p>
        </div>
        <div className="form d-flex justify-content-center align-items-center flex-column">
          <form>
            <div className="email d-flex align-items-center mt-1 my-3">
              <MdEmail className="fs-5 text-black-50"/>
              <input className="" type="email" name="email" placeholder="Email" />
            </div>
            <Link to="/confirmpassword" className="button py-2 px-4 bg-orange rounded-3 text-white mb-3 fw-bold">Send</Link>
          </form>
        </div>
      </div>
    </div>
  </>;
}
export default ForgetPassword;
