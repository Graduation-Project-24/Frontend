import "./Cart.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";

function Cart() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  var token = localStorage.getItem("userToken", token);
  const apiUrl = "https://www.smarketp.somee.com/api/Order/getShoppingCartbyUser"
  const AuthString = 'Bearer '.concat(token);

  //reQuest Main Data
    useEffect(()=>{
      fetchData()
    },[])

  const fetchData =()=>{
    axios.get(apiUrl, { headers: { Authorization: AuthString } })
      .then(response => {
        setData(response.data.packages)
      })
      .then(() => {
        setLoading(false);
      })
  }

  console.log(data)

  //reQuest Remove Data
  const handleDeleteItem = async (Id) => {
    const DeleteItemApi ="https://www.smarketp.somee.com/api/Order/RemoveFromCart"
    axios.post(apiUrl, { productId: Id }, { headers: { Authorization: AuthString } })
      .then(response => {
        console.log(response.ok)
        fetchData()
      })
      .then(() => {
        setLoading(false);
      })

    // try {
    //   const response = await fetch(DeleteItemApi, {
    //     method: "POST",
    //     headers: {
    //       "Authorization": `Bearer ${token}`,
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ productId: Id })
    //   });
    //   console.log(response)
    //   console.log(JSON.stringify({ productId: Id }))
    //   if (response.ok) {
        
    //   } else {
    //     console.error("Failed to delete From Cart");
    //   }
    // } catch (error) {
    //   console.error("Error deleting favorite:", error);
    // }
  };
  
  //caclulate Total 
  let getTotal = ()=>{
    var total = 0
    if(!loading){
      for (var i = 0; i < data.length; i++) {
        total += data[i].count * data[i].price;
      }
      return total;
    }else{
      return total
    }
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
                  <th>Delete</th>
                </tr>
              </thead>  

              <tbody>
                {!loading ? (
                  data.map((e, i)=>
                    <tr>
                      <td>{i+1}</td>
                      <td><img src={e.productImageUrl} alt="Product 2" width="50" height="50"/></td>
                      <td>{e.count}</td>
                      <td>${e.count * e.price}</td>
                      <td>
                        <MdDelete className="action ms-2 text-danger" onClick={()=>handleDeleteItem(e.productId)} />
                      </td>
                    </tr>)
                    ):<div className="parentloader"><div className="loader"></div></div>}
              </tbody>

          </table>
          <div className="total d-flex justify-content-between ">
            <h4 className="fw-bold">Total : ${getTotal()}</h4>
            <button className="btn bg-orange fw-bold">Check Out</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
