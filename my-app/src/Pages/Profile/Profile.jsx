import { useState } from "react";
import "./Profile.css";
import profile from './assets/me.jpg'
import { FaCamera } from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";



export default function Profile() {
  
  const [isActive, setIsActive] = useState(false);
  
  let Links = document.querySelectorAll(Link);
  
  
  return (
    <>
      <div className="profile">
        <div className="container-fluid">
          <div className="content my-3 pt-3">
            <div class="row  justify-content-around gap-3">
              <div className="col-3 box py-4 rounded" data-aos="fade-right">
                <div className="box-img">
                  <img src={profile} alt="profile" />
                  <FaCamera className="camera text-white fs-3"/>
                </div>
                <div className="box-title">
                  <h3 className="fw-bold fs-5 text-center mt-2">Omar EL-Nahas</h3>
                </div>
                <div className="box-list d-flex flex-column justify-content-between align-items-start">
                  <ul className="mb-0 mt-3">
                    <li className="mb-4"><Link to="/profile" className={isActive ? "active" : ""} onClick={handleClick}>Account</Link></li>
                    <li className="mb-4"><Link to="/profile/password" className={isActive ? "active" : ""} onClick={handleClick}>Password</Link></li>
                    <li className="mb-4"><Link to="/profile/orders" className={isActive ? "active" : ""} onClick={handleClick}>Orders</Link></li>
                    <li className="mb-4"><Link to="/profile/favorite" className={isActive ? "active" : ""} onClick={handleClick}>Favorite</Link></li>
                    <li className="mb-4"><Link to="/user" className={isActive ? "active" : ""} onClick={handleClick}>Log Out</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-7 border me-1 rounded p-4" data-aos="fade-left">
                <Outlet/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
