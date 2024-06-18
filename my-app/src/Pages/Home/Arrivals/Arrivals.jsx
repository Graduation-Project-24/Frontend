/* eslint-disable jsx-a11y/anchor-is-valid */
import product1 from "../assets/product1.png"
import product2 from "../assets/product4.png"
import product3 from "../assets/product2.png"
import product4 from "../assets/product3.png"
import product5 from "../assets/product5.png"

import { Link } from 'react-router-dom'


const data = [
  {
      title:"Samsung Automatic..",
      src:product1,
      seller:"Bin Bakar Electronics",
      lastprice:"EGP 60.000",
      newprice:"EGP 101.000"
  },
  {
      title:"Samsung 40N5300 S..",
      src: product2,
      seller:"Bin Bakar Electronics",
      lastprice:"EGP 60.000",
      newprice:"EGP 101.000"
  },
  {
      title:"Haier HSU-12HFMAC ..",
      src:product3,
      seller:"Bin Bakar Electronics",
      lastprice:"EGP 60.000",
      newprice:"EGP 101.000"
  },
  {
      title:"Anex Roti Maker ..",
      src:product4,
      seller:"Bin Bakar Electronics",
      lastprice:"EGP 60.000",
      newprice:"EGP 101.000"
  },
  {
      title:"Samsung 40N5300 S..",
      src:product5,
      seller:"Bin Bakar Electronics",
      lastprice:"EGP 60.000",
      newprice:"EGP 101.000"
  },

]; 
function Arrivals() {

  return (
    <>
      <div className="arrivals my-3 py-4 ">
        <div className="container ">
          <h3 className="fw-bold"><span className="orange mb-2">New</span> Arrivals</h3>
          <div className="row justify-content-around flex-wrap">
            {
              data.map((element)=>
                <div className="product border p-2 mb-2 rounded-3" data-aos="zoom-in">
                  <div className="title">
                    <h5 className="text-black-50 fs-6">{element.seller}</h5>
                    <h4 className="fs-6">{element.title}</h4>
                  </div>
                  <div className="image text-center">
                    <img src={element.src} alt="product_image" />
                  </div>
                  <div className="price d-flex flex-column">
                    <p className="text-black-50"><del>{element.lastprice}</del></p>
                    <p className="orange">{element.newprice}</p>
                  </div>
                  <Link to="/shop" className='btn bg-orange'>Add to cart</Link>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}
export default Arrivals;
