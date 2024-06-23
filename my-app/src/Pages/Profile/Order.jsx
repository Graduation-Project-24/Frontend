import React, { useState,useEffect } from "react";
import Pagination from '../Shop/Pagination'
import { jwtDecode } from "jwt-decode";

function Order() {

  var token = localStorage.getItem("userToken", token);
  const decoded = jwtDecode(token);
  const nameId = parseInt(decoded.nameid)

  const [data, setData] = useState([])

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const token = localStorage.getItem("userToken");
    if (token) {
      try {
        const response = await fetch("https://www.smarketp.somee.com/api/Order/GetOrdersForUser", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (response.ok) {
          const data = await response.json();
          setData(data)
        } else {
          console.error("Failed to fetch favorites");
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    } else {
      console.error("Token not found in localStorage");
    }
  };

  return (
    <>
      <div className="order p-relative">
        <h3 className="fw-bold">Order History</h3>
        <table class="table">
          <thead>
            <tr>
              <th className="text-start">Order ID</th>
              <th className="text-start">Dates</th>
              <th className="text-start">Status</th>
              <th className="text-start">Price</th>
            </tr>
          </thead>
          <tbody>
            {data ?
            (data.map((e) => 
              <tr>
                <td>#{e.orderId}</td>
                <td>{e.date}</td>
                <td>{e.status}</td>
                <td>${e.totalPrice}</td>
              </tr>)
              ):<div className="parentloader"><div class="loader"></div></div>}
          </tbody>
        </table>

      </div>
    </>
  );
}

export default Order;
