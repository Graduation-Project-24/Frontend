import React from "react";

function Order() {
  return (
    <>
      <div className="order">
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
            <tr>
              <td>#3456_768</td>
              <td>October 17, 2023</td>
              <td>Delivered</td>
              <td>$1234.00</td>
            </tr>
            <tr>
              <td>#3456_768</td>
              <td>October 17, 2023</td>
              <td>Delivered</td>
              <td>$1234.00</td>
            </tr>
            <tr>
              <td>#3456_768</td>
              <td>October 17, 2023</td>
              <td>Delivered</td>
              <td>$1234.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Order;
