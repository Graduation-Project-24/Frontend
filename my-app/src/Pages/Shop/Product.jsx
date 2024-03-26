import { FaHeart } from "react-icons/fa";


import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  const params = useParams()
  const [product, setProduct] = useState(null)

  let api =`https://www.smarketp.somee.com/api/Product/Details/${params.id}`

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(api)
      const data = await response.json()
      setProduct(data)
    }
    getProduct()
  }, [params.id])

  const [quantity, setQuantity] = useState(1)

  let stock = 8

  function plus(){
    if(quantity < stock )
      setQuantity(quantity + 1)
  }
  function minus(){
    if(quantity > 1)
      setQuantity(quantity - 1)
  }

  return <>
    {product ?(
      <div className="product py-3 my-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="product-img">
                <img src= {product.imageUrl} alt="product-img" />
              </div>
            </div>
            <div className="col-6">
              <div>
                <h2 className="mb-3">{product.name}</h2>
                <div className="price mb-3">
                  <p className="fs-3 orange">{product.price}$</p>
                </div>
                <div className="quantity mb-4">
                  Quatity:
                  <div className="d-inline ms-2">
                    <button className="btn border border-2 rounded-circle me-2" onClick={plus}>+</button>
                    {quantity}
                    <button className="btn border border-2 rounded-circle ms-2" onClick={minus}>-</button>
                  </div>
                </div>
                <div className="action">
                  <button className="btn border border-2 me-1">Add to Cart</button>
                  <button className="btn primary-color me-1">Buy Now</button>
                  <button className="btn border border-2 rounded-circle"><FaHeart /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-detail py-3 my-3">
            <div className="row">
              <nav>
                <ul className="d-flex">
                  <li className="active">Overview</li>
                  <li >Rating</li>
                </ul>
              </nav>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    ) : <div className="parentloader"><div class="loader"></div></div>}
  </>;
}

export default Product;
