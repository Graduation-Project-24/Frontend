
import { Link } from 'react-router-dom'

function Hero() {
  return <>
    <div className="hero">
        <div className="container">
            <div className="row">
                <div className="left col-6 col-md-6 py-5">
                    <h1>Discover the Best Deals Today!</h1>
                    <p>
                    At Smarket, we bring you a curated selection of the finest products across various categories.
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