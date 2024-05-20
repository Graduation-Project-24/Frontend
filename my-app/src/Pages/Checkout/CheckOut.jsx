import "./CheckOut.css";

function CheckOut() {
  return (
    <>
      <div className="checkout py-4 my-4">
        <div className="container">
          <h2 className="fw-bold">Checkout</h2>
          <div className="row">
            <div className="col mt-3">
              <h5 className="fw-bold">Billing Address</h5>
            </div>
            <div className="col mt-3">
              <h5 className="fw-bold">Order Details</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
