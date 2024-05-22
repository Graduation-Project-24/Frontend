import "./CheckOut.css";
import axios from "axios";
import { useEffect, useState } from "react";



function CheckOut() {

  const [loading, setLoading] = useState(true)

  const [data, setData] = useState([])
  
  var token = localStorage.getItem("userToken", token);
  const apiUrl = "https://www.smarketp.somee.com/api/Order/getShoppingCartbyUser"
  const AuthString = 'Bearer '.concat(token);

  const fetchData =()=>{
    axios.get(apiUrl, { headers: { Authorization: AuthString } })
      .then(response => {
        setData(response.data.packages)
      })
      .then(() => {
        setLoading(false);
      })
  }

  useEffect(()=>{
    fetchData()
  },[])

  console.log(data)

  return (
    <>
      <div className="checkout py-3 my-3">
        <div className="container-fluid">
          <h2 className="fw-bold">Checkout</h2>
          <div className="row gap-3">
            <div className="col mt-2 border rounded  px-2 py-3">
              <h4 className="fw-bold">Billing Address</h4>
            </div>
            <div className="col mt-2 border rounded px-2 py-3">
              <h4 className="fw-bold">Order Details</h4>
              {data.map((e)=>
                <div className="box d-flex justify-content-between align-items-center">
                  <div className="product_img">
                    <img src={e.productImageUrl} alt="product_img" style={{width:70}}/>
                  </div>
                  <div className="product_name">
                    {e.count}
                  </div>
                  <div className="product_price text-black-50">
                    ${e.price * e.count}
                  </div>
                </div>)}
              <hr />
              <div className="total_price">
                <div className="original_price  d-flex justify-content-between">
                  <p className="">Original Price : </p>
                  <p className="">Original Price : </p>
                </div>
                <div className="discount  d-flex justify-content-between">
                  <p>Discount : </p>
                  <p>Discount : </p>
                </div>
                <div className="total_price d-flex justify-content-between">
                  <p>Total : </p>
                  <p>Total : </p>
                </div>
                <hr />
                <div className="checkout_button d-flex">
                  <button className="btn bg-orange text-white text-center">Complete Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
