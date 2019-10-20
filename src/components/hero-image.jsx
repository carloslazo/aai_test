import React from 'react';
import smartwatch from '../assets/smartwatch.svg'
import drone from '../assets/group-2-copy.svg'
import webcam from '../assets/webcam.svg'
import webcam2 from '../assets/group-22.svg'
import securityCamera from '../assets/security-camera.svg'
import chip from '../assets/chip.svg'
import oval from '../assets/oval.svg'
import rectangle from '../assets/rectangle.svg'
import component1 from '../assets/component1.svg'

function HeroImage(props) {
  return (
    <div class="jumbotron jumbotron-fluid text-white the-index">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <h3>
              Unleash the power of computer vision at the edge
            </h3>
            <p class="lead">
              alwaysAI provides developers with a simple and flexible way to deliver deep learning computer vision for a wide variety of edge devices.
            </p>
            <h6>
              <a class="text-white" href="#">
                Get Started <i class="fas fa-arrow-right"></i>
            </a>
          </h6>
        </div>
        <div class="col-lg-7">
            <div class="row">
              <div class="col-12 my-auto text-center my-auto">
                <img src={component1} class="img-fluid"/>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
);
}

export default HeroImage;
