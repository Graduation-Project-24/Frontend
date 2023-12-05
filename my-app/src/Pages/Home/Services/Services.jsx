import { MdOutlineLocalShipping } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

function Services() {
  const data = [
    {
      icon: <MdOutlineLocalShipping />,
      title: "Free Shipping",
      disc: "Order above $200",
    },
    {
      icon: <CiMoneyBill />,
      title: "Money-back",
      disc: "30 days guarantee",
    },
    {
      icon: <CiLock />,
      title: "Secure Payments",
      disc: "Secured by Stripe",
    },
    {
      icon: <FiPhone />,
      title: "24/7 Support",
      disc: "Phone and Email support",
    },
  ];

  return (
    <>
      <div className="services py-5 my-2">
        <div className="container-fluid">
          <div className="row">
            <h3><span className="orange">Our</span> Services</h3>
            <div className="ourservices d-flex justify-content-between mt-3">
            {data.map((e) => 
              <div className="box p-3 p-lg-5 rounded-3" data-aos="zoom-in">
                <div className="icon fs-1 fw-normal mb-3">
                  {e.icon}
                </div>
                <h4 className="fs-3 fw-bolc">{e.title}</h4>
                <p className="text-black-50">{e.disc}</p>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;
