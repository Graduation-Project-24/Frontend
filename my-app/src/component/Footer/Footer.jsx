/* eslint-disable jsx-a11y/anchor-is-valid */

import "./Footer.css";
import Visa from "../../assets/visa.svg";
import Stripe from "../../assets/stripe.svg";
import Mastercard from "../../assets/mastercard.svg";
import Logo from "../../assets/whitelogo.png";


function Footer() {
  return <>
      <div class="footer pt-5 pb-3 text-white-50 text-center text-md-start ">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 col-lg-3">
              <div class="links">
                <h5 class="text-light">Company</h5>
                <ul class="list-unstyled lh-lg">
                  <li>
                    <a href="#" className="text-white-50">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-50">
                      All Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-50">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-50">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-50">
                      Terms and Condition
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="links">
                <h5 class="text-light">Customer Service</h5>
                <ul class="list-unstyled lh-lg ">
                  <li>
                    <a href="#" className="text-white-50">
                      Deliver Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-50">
                      Talk Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-50">
                      Contacts Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="links">
                <h5 class="text-light">Order & Purchase</h5>
                <ul class="list-unstyled lh-lg">
                  <li>
                    <a href="#" className="text-white-50">
                      Check Order Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-50">
                      Shopping, Deliver & Pickup
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white-50">
                      Gift Cards
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-6 col-lg-3">
              <div class="links">
                <h5 class="text-light">Payment Methods</h5>
                <div>
                  <div className="icons d-flex ">
                    <a href="#" className="ms-">
                      <img src={Visa} alt="Visa logo" />
                    </a>
                    <a href="#" className="ms-2">
                      <img src={Mastercard} alt="Visa logo" />
                    </a>
                    <a href="#" className="ms-2">
                      <img src={Stripe} alt="Visa logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex flex-column align-items-center my-4">
            <div className="logo mb-3 d-flex justify-content-center ">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="text text-center text-white">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy a
                type specimen book.
              </p>
            </div>
          </div>
        </div>
        <hr class="border border-secondary border-1 opacity-75" />
        <div className="copyright text-center">
          @2023 ApplicationName. All right Reserved
        </div>
      </div>
    </>
}
export default Footer;
