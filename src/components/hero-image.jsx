import React from 'react';
import smartwatch from '../assets/smartwatch.svg'
import drone from '../assets/group-2-copy.svg'
import webcam from '../assets/webcam.svg'
import webcam2 from '../assets/group-22.svg'
import securityCamera from '../assets/security-camera.svg'
import chip from '../assets/chip.svg'

function HeroImage(props) {
  return (
    <div class="jumbotron jumbotron-fluid text-white">
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
            <div class="col-4 my-auto text-center custom-height my-auto">
              <img
                class="custom-fluid-container"
                src={smartwatch}
                alt="smartwatch"/>
            </div>
            <div class="col-4 text-center custom-height">
              <img
                class="custom-fluid-container"
                src={drone}
                alt="drone"/>
            </div>
            <div class="col-4 text-center custom-height">
              <img
                class="custom-fluid-container"
                src={webcam}
                alt="webcam"/>
            </div>
          </div>
          <div class="row">
            <div class="col-4 text-center custom-height">
              <img
                class="custom-fluid-container"
                src={webcam2}
                alt="webcam2"/>
            </div>
            <div class="col-4 text-center custom-height">
              <img
                class="custom-fluid-container"
                src={securityCamera}
                alt="securityCamera"/>
            </div>
            <div class="col-4 text-center custom-height">
              <img
                class="custom-fluid-container"
                src={chip}
                alt="chip"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default HeroImage;
