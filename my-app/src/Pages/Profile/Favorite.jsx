import { IoMdClose } from "react-icons/io";
import product from './assets/laptops.png'

function Favorite() {
  return (
    <>
      <div className="favorite">
        <h3 className="fw-bold">Favorite Products</h3>
        <table class="table">
            <thead>
              <tr>
                <th className="text-start">Product</th>
                <th className="text-start">Price</th>
                <th className="text-start">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="d-flex justify-content-evenly align-items-center">
                  <IoMdClose className="action text-danger me-2"/>
                  <img src={product} alt="Product 2" width="50" height="50"/>
                  <h5 className="mx-2 d-inline">Laptop</h5>
                </td>
                <td>$200</td>
                <td>
                  <button className="btn bg-orange">Add to Cart</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </>
  );
}

export default Favorite;
