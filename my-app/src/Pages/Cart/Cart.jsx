import "./Cart.css";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  var token = localStorage.getItem("userToken", token);
  const apiUrl = "https://www.smarketp.somee.com/api/Order/getShoppingCartbyUser"
  const AuthString = 'Bearer '.concat(token);

  useEffect(()=>{
    axios.get(apiUrl, { headers: { Authorization: AuthString } })
    .then(response => {
        setData(response.data)
    })
    .finally(() => {
      setLoading(false);
    })
  },[])
  
  if(loading){
    let getTotal = ()=>{
      var total = 0;
      for (var i = 0; i < data.packages.length; i++) {
        total += data.packages[i].count * data.packages[i].price;
      }
      return total;
    }
  }else{
    return 0
  }

  return (
    <>
      <div className="cart my-5 py-3">
        <div className="container-fluid">
          <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {!loading ? (
                  data.packages.map((e, i)=>
                    <tr>
                      <td>{i+1}</td>
                      <td><img src={e.productImageUrl} alt="Product 2" width="50" height="50"/></td>
                      <td>{e.count}</td>
                      <td>${e.count * e.price}</td>
                      <td>
                        <IoIosAddCircle className="action me-2 text-primary" />
                        <CiCircleMinus className="action mx-2 text-primary" />
                        <MdDelete className="action ms-2 text-danger" />
                      </td>
                    </tr>)
                    ):<div className="parentloader"><div className="loader"></div></div>}
              </tbody>

          </table>
          <div className="total d-flex justify-content-between ">
            <h4 className="fw-bold">Total : ${getTotal()}</h4>
            <button className="btn bg-orange fw-bold">Confirm</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
