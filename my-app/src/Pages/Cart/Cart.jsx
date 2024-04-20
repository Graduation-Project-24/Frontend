import "./Cart.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";


function Cart() {
  return (
    <>
      <div className="cart my-5 py-3">
        <div className="container-fluid">
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                  <th>Product</th>
                  <th>Product Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Product 2</td>
                  <td><img src="image_source" alt="Product 2" width="50" height="50"/></td>
                  <td>1</td>
                  <td>$200</td>
                  <td>
                    <IoIosAddCircle className="action me-2 text-primary" />
                    <MdDelete className="action ms-2 text-danger" />
                  </td>
                </tr>
            </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default Cart;
