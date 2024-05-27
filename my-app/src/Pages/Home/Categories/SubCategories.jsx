/* eslint-disable jsx-a11y/anchor-is-valid */
import image1 from '../assets/electronics-bg.png'
import image2 from '../assets/fashion-bg.png'
import image3 from '../assets/appliances-bg.png'
import image4 from '../assets/babiesstore-bg.png'
import image5 from '../assets/winmart-bg.png'

const data = [
  {
      title:"Electronics",
      src:image1,
  },
  {
      title:"Fashion",
      src: image2,
  },
  {
      title:"Appliances",
      src:image3,
  },
  {
      title:"Babies Store",
      src:image4,
  },
  {
    title:"Win mart",
    src:image5,
},
  
]; 

function SubCategories() {
  return (
    <>
      <div className="supcategory pt-2">
        <div className="container" data-aos="zoom-in">
          <div className="row flex-wrap justify-content-between gap-1">
              {data.map ((element) =>
                <div className="box position-relative ">
                  <div className="image">
                    <img src={element.src} alt="supCategorybg" />
                  </div>
                  <div className='title  d-flex justify-content-between align-items-center'>
                    <h4 className='ms-3 mb-0 fs-5 fw-bold'>{element.title}</h4>
                    <a className='btn fs-5 border-0' href="#">Shop</a>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}
export default SubCategories
