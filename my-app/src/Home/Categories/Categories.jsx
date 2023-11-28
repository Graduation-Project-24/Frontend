/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import "./Categories.css";
import SubCategories from "./SubCategories/SubCategories";

import image1 from "./assets/fashion.png"
import image2 from "./assets/school.png"
import image3 from "./assets/sport.png"
import image4 from "./assets/electroinc.png"
import image5 from "./assets/supermarket.png"
import image6 from "./assets/beauty.png"
import image7 from "./assets/mobile.png"
import image8 from "./assets/footwear.png"
import image9 from "./assets/toys.png"
import image10 from "./assets/laptops.png"
import image11 from "./assets/all.png"

const data = [
    {
        title:"Fashion",
        src:image1,
        color:"orange"
    },
    {
        title:"School",
        src: image2,
        color:"grey"
    },
    {
        title:"Sports",
        src:image3,
        color:"lightgrey"
    },
    {
        title:"Electroincs",
        src:image4,
        color:"orange"
    },
    {
        title:"Supermarket",
        src:image5,
        color:"grey"
    },
    {
        title:"Beauty",
        src:image6,
        color:"orange"
    },
    {
        title:"Mobile",
        src:image7,
        color:"grey"
    },
    {
        title:"Footweat",
        src:image8,
        color:"lightgrey"
    },
    {title:"Toys",
        src:image9,
        color:"orange"
    },
    {
        title:"Laptops",
        src:image10,
        color:"grey"
    },
    {
        title:"All",
        src:image11,
        color:"lightgrey"
    }
]; 

function Categories() {
  return (
    <>
    <SubCategories />
    <div className="py-2 my-2">
      <div className="container-fluid">
        <div className="row">
          <div className="parent d-flex flex-wrap justify-content-between">
            {
              data.map((element) => 
                <div 
                  className="category d-flex flex-column align-items-center justify-content-center" 
                  
                >
                  <div className="py-4 px-4 m-1" style={{"background":element.color, "borderRadius" :"10px"}}>
                    <a className="background" href="#"> 
                      <img src={element.src} alt="" />
                    </a>
                  </div>
                  <h3 className="mt-2 fs-4">{element.title}</h3>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Categories;
