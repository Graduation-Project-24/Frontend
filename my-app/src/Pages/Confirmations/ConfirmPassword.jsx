/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import "./Confirmations.css";

import { CiCircleCheck } from "react-icons/ci";


function ConfirmPassword() {
  return <>
    <div className="confirm_password py-5 my-3 mb-2">
      <div className="container">
        <div className="image text-center">
          <CiCircleCheck />
        </div>
        <div className="content text-center">
          <h2 className="fs-1 py-5">Successfully</h2>
          <p className="text-black-50">We have send for you email confirm Link</p>
          <Link to="/" className="primary-color btn text-white my-3">Continue</Link>
        </div>
      </div>
    </div>
  </>;
}
export default ConfirmPassword;
