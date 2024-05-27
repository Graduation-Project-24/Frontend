
import { Link } from 'react-router-dom'

function Hero() {
  return <>
    <div className="hero">
        <div className="container">
            <div className="row">
                <div className="left col-6 col-md-6 my-5 py-5 d-flex flex-column justify-content-center" data-aos="fade-right">
                    <h1>Shop Computer & experience</h1>
                    <p>
                        You cannot inspect quality into the product, it is already there.
                        I am not a product of my circumstances.I am a product of my decisions.
                    </p>
                    <Link to='/shop' className='btn btn-primary'>View More</Link>
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