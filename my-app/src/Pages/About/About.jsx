/* eslint-disable jsx-a11y/img-redundant-alt */
import './about.css'
import omar from "../../assets/me.jpg"

function About() {
  return (
    <div className="about py-4 my-4">
      <div className="container-fluid">
        <div className="row">
          <h3>Who We Are</h3> 
          <p>
            Our Graduation project revolves around a cutting-edge E-Commerce system designed to redefine the online shopping experience. Users can effortlessly place orders through a user-friendly website, or mobile application initiating a seamless process that combines advanced technology and artificial intelligence. The heart of the system lies in a Raspberry Pi-powered robot, meticulously engineered to navigate autonomously through a predefined space to retrieve items. What sets this project apart is the integration of an AI-powered algorithm, specifically the A* algorithm, which intelligently determines the optimal path for the robot to traverse in reaching the desired products. The key to this efficiency is a meticulously crafted map that serves as a digital blueprint of the shopping environment. Each product's precise location, represented by coordinates on the x, y, and z axes, is stored in a database. This spatial information is then utilized by the A* algorithm to calculate the most efficient route for the robot to follow, ensuring quick and precise retrieval of the ordered items. Real-time updates are seamlessly communicated to users via the website, keeping them informed about the status of their orders. As the robot successfully retrieves the items, it strategically returns to a central point for streamlined delivery preparation
          </p>  
        </div>
        <div className="row mt-3">
          <h3>How It Works</h3> 
          <div className="video mt-2"></div>
        </div>
        <div className="row mt-3 justify-content-center">
          <h3>Our Team</h3>     
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
          <div class="box" style={{width: 250}}>
            <div className="box-img">
              <img src={omar} class="card-img-top" alt="member-image" />
            </div>
            <div class="box-body">
              <h5 class="box-title">Omar EL-Nahas</h5>
              <p class="box-text text-black-50">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}export default About
