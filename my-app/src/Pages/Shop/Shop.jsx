import React from 'react'
import "./shop.css"
import { useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Pagination from './Pagination.jsx'
import Price from './Price/Price.jsx'

export default function Shop() {
  const api = "https://www.smarketp.somee.com/api/Product/GetProductsWeb";

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(24);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initially set filteredProducts to all products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterItems(priceFilter);
  }, [priceFilter, products]);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPriceFilter(value);
  };

  const filterItems = (priceRange, category) => {
    let filtered = products;

    // Filter by price
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = products.filter(item => {
        const price = item.price; // Assuming each item has a price property
        if (!isNaN(max)) {
          return price >= min && price <= max;
        } else {
          return price >= min;
        }
      });
    }
    setFilteredProducts(filtered);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredProducts.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(filteredProducts.length / recordsPerPage);

  return <>
    <div className="shop">
      <div className='container d-flex my-3 py-2'>
        <div className="sidebar">
          <Price handleChange={handlePriceChange} />
        </div>
        <div className="products flex-wrap d-flex justify-content-center mx-auto">
          {products ? (
            currentRecords.map((e) => 
            <div className="box border rounded-3 px-2 py-2" style={{width: 200}}>
              <div className='card-img'>
                <img className="" src={e.imageUrl} alt="Card" />
              </div>
              <div className="card-body">
                <h5 className="card-title fs-6 text-black-50">{e.name}</h5>
              </div>
              <hr />
              <div className='d-flex justify-content-between align-items-center'>
                <h6 className='m-0'>{e.price}$</h6>
                <Link to={`${e.id}`} className='btn bg-orange m-0'>
                  Details
                </Link>
              </div>
            </div>
            )
          ):  <div className="parentloader"><div class="loader"></div></div>}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  </>
}



