/* eslint-disable jsx-a11y/anchor-is-valid */
import image1 from "../assets/phone.png"
import image2 from "../assets/caple.png"
import image3 from "../assets/watch.png"

const data =[
  {
    src:image1,
    price:"RS 30,000"
  },
  {
    src:image2,
    price:"RS 30,000"
  },
  {
    src:image3,
    price:"RS 30,000"
  }
]

function BestSeller() {
  return (
    <>
      <div className="bestseller py-4 my-2">
        <div className="container-fluid">
          <div className="row flex-nowrap justify-content-between align-items-center flex-column flex-lg-row">
            <div className="col-md-4 col-6 mb-3" data-aos="fade-right">
              <div className="title">
                <h3 className="mb-5 fw-bold ">Best <span className="orange">Seller</span></h3>
                <p className="lh-lg mb-5">You cannot inspect quality into the product; it is already there. I am not a product of my circumstances. I am a product of my decisions.</p>
                <a href="#" className="btn primary-color text-white">View More</a>
              </div>
            </div>
            <div className="col products d-flex flex-wrap justify-content-between" >
              {data.map((e) =>
                <div className="product border p-2 m-2 flex-column " data-aos="fade-right">
                  <div className="image">
                    <img src={e.src} alt="productimage" className="w-75" />
                  </div>
                  <div className="price d-flex justify-content-between align-items-center">
                    <p className="mb-0">{e.price}</p>
                    <a href="#" className='btn orange'>Add to cart</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestSeller;
