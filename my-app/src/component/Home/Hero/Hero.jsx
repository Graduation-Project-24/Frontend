/* eslint-disable jsx-a11y/anchor-is-valid */
import './Hero.css'

function Hero() {
  return <>
    <div className="hero">
        <div className="container-fluid my-2">
            <div className="row">
                <div className="col-3 col-md-6 left d-flex flex-column justify-content-center">
                    <h1>Shop <span>Computer & experience</span></h1>
                    <p>
                        You cannot inspect quality into the product, it is already there.
                        I am not a product of my circumstances.I am a product of my decisions.
                    </p>
                    <a href='#' className='btn btn-primary'>View More</a>
                </div>
                <div className="col-3 col-md-6 right">
                    test
                </div>
            </div>
        </div>
    </div>
  </>
}
export default Hero