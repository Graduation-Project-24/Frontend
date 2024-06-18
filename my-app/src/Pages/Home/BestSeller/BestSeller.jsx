/* eslint-disable jsx-a11y/anchor-is-valid */
import image1 from "../assets/phone.png"
import image2 from "../assets/caple.png"
import image3 from "../assets/watch.png"

import { Link } from 'react-router-dom'

import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items =[
  {
    src:image1,
    price:"EGP 29,999"
  },
  {
    src:image2,
    price:"EGP 150"
  },
  {
    src:image3,
    price:"EGP 2,499"
  }
]

function BestSeller() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="bg-fifth px-2 py-4"
      >
        <div className="best-item d-flex m-auto">
          <img src={item.src} alt={item.altText} className="" />
        </div>
        <div className="price text-black">
          <h4>{item.price}</h4>
        </div>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <>
      <div className="bestseller py-4 my-2">
        <div className="container">
          <div className="row flex-nowrap justify-content-between align-items-center flex-sm-row flex-column">
            <div className="col-md-4 col-6 mb-3" data-aos="fade-right">
              <div className="title">
                <h3 className="mb-5 fw-bold "><span className="orange">Best</span> Seller</h3>
                <p className="lh-lg mb-5">You cannot inspect quality into the product; it is already there. I am not a product of my circumstances. I am a product of my decisions.</p>
                <Link to="/shop" className="btn primary-color text-white">View More</Link>
              </div>
            </div>
            <div className="col-md-4 col-6 products px-2 py-3 " >
              <Link to="/shop">
                <Carousel activeIndex={activeIndex} next={next} previous={previous} className="border rounded-3">
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    {slides}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestSeller;
