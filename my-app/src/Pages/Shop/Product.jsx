import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";

const Product = () => {
  const { id } = useParams();
  const [token] = useState(localStorage.getItem("userToken"));
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [recommendations, setRecommendations] = useState([]);
  const [flag, setFlag] = useState(id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://www.smarketp.somee.com/api/Product/getproductdetailsforweb/${flag}`;
        const response = await axios.get(apiUrl);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [flag]);

  // Fetch recommendations
  useEffect(() => {
    const fetchRecommendations = async () => {
      if (product) {
        try {
          const apiUrl = `https://esmael-saleh-recommend-50-samples.hf.space/api/recommendations?product_id=${id}&num_recommendations=5`;
          const response = await axios.get(apiUrl);
          setRecommendations(response.data.recommendations);
          console.log(recommendations)
        } catch (error) {
          console.error('Error fetching recommendations:', error);
        }
      }
    };

    fetchRecommendations();
  }, [product]);

  // Check if product is in favorites
  useEffect(() => {
    const checkFavorite = async () => {
      if (product) {
        const apiUrl = `https://www.smarketp.somee.com/api/Favorite/CheckFavorite?productId=${id}`;
        try {
          const config = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          };
          const response = await axios.get(apiUrl, config);
          setIsFavorite(response.data.isFavorite);
        } catch (error) {
          console.error('Error checking favorite status:', error);
        }
      }
    };

    checkFavorite();
  }, [product, token]);

  // Toggle favorite status
  const toggleFavorite = async () => {
    if (!product) return;

    const apiUrlAdd = 'https://www.smarketp.somee.com/api/Favorite/Add';
    const apiUrlDelete = 'https://www.smarketp.somee.com/api/Favorite/Delete';

    try {
      const apiUrl = isFavorite ? apiUrlDelete : apiUrlAdd;
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };

      const method = isFavorite ? axios.delete : axios.post;
      await method(apiUrl, { productId: product.id }, config);
      setIsFavorite(!isFavorite);
      const message = isFavorite ? "Removed from favorites" : "Added to favorites";
      toast.success(message);
    } catch (error) {
      console.error('Error toggling favorite:', error);
      toast.error("Failed to update favorite status");
    }
  };

  // Add to cart
  const addToCart = async () => {
    if (!product) return;

    const apiUrl = 'https://www.smarketp.somee.com/api/Order/AddToCart';
    const postData = {
      "productId": id,
      "quantity": quantity
    };

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      };
      await axios.post(apiUrl, postData, config);
      toast.info("Product added to cart", { icon: FaShoppingCart });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error("Failed to add product to cart");
    }
  };

  // Handle quantity change
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0 && newQuantity <= (product?.left || 0)) {
      setQuantity(newQuantity);
    }
  };

  const activeStyle = {
    width: "fit-content",
    margin: "0 20",
    padding: "5px 10px",
  };

  return (
    <>
      {!loading ? (
        <div className="product py-3 my-3">
          <div className="container">
            <ToastContainer theme="dark" />
            <div className="row">
              <div className="col-6">
                <div className="product-img">
                  <img src={product.imageUrl} alt="product-img" />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <h2 className="mb-3">{product.name}</h2>
                  <div className="price mb-3 d-flex align-items-center">
                    <p className="fs-3 orange me-3">{product.price}$</p>
                    <p>{[...Array(product.averageRate)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}</p>
                  </div>
                  <div className="quantity mb-4">
                    Quantity:
                    <div className="d-inline ms-2">
                      <button className="btn border border-2 rounded-circle me-2" onClick={() => handleQuantityChange(1)}>+</button>
                      {quantity}
                      <button className="btn border border-2 rounded-circle ms-2" onClick={() => handleQuantityChange(-1)}>-</button>
                    </div>
                  </div>
                  <div className="action">
                    <button className="btn border border-2 me-1" onClick={addToCart}>Add to Cart</button>
                    <button
                      style={activeStyle}
                      className={isFavorite ? "text-danger" : null}
                      onClick={toggleFavorite}
                    ><FaHeart /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-detail py-3 my-3">
              <div className="row">
                <nav>
                  <ul className="d-flex">
                    <li className="active">Overview</li>
                    <li>Rating</li>
                  </ul>
                </nav>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="parentloader"><div className="loader"></div></div>
      )}

      <div className="other-products mb-4">
        <div className="container">
          <div className="row justify-content-around">
            {!loading ? (
              recommendations.map((recommendedItem) => (
                <div key={recommendedItem.product_id} className="cardd border rounded-3 px-2 py-2" style={{ width: 200 }}>
                  <div className='card-img'>
                    <img src={recommendedItem.img_link_y} alt="Card" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-6 text-black-50">{recommendedItem.product_name}</h5>
                  </div>
                  <hr />
                  <div className='d-flex justify-content-between align-items-center'>
                    <Link to={`/home/shop/${recommendedItem.product_id}`} onClick={() => setFlag(recommendedItem.product_id)} className="btn bg-orange">See more</Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="parentloader"><div className="loader"></div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
