/* eslint-disable jsx-a11y/anchor-is-valid */ 
import background from '../assets/hero.jpg'

function Hero() {
  return <>
    <div className="hero">
        {/* <img src={background} alt="" className='heroimg' /> */}
        <div className="container-fluid">
            <div className="row">
                <div className="left col-6 col-md-6 my-5 py-5 d-flex flex-column justify-content-center" data-aos="fade-right">
                    <h1>Shop Computer & experience</h1>
                    <p>
                        You cannot inspect quality into the product, it is already there.
                        I am not a product of my circumstances.I am a product of my decisions.
                    </p>
                    <a href='#' className='btn btn-primary'>View More</a>
                </div>
                <div className="col-6 col-md-6 right" data-aos="fade-left">
                    <div className='offer'>
                        <p>40%</p>
                        <p>off</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>
}
export default Hero