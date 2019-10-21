import React from "react";
import oval from "../assets/oval-pink.svg";
import rectangle from "../assets/rectangle-pink.svg";
import group19 from "../assets/group-19.svg";
import developer from "../assets/developer.svg";
import pointerRight from "../assets/group-5-copy-2.svg";
import pointerLeft from "../assets/group-5-copy-3.svg";

function NumberedSteps(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="numbered-steps-container">
            <div class="numbered-shape">
              <img src={oval} alt="oval" />
            </div>
            <div class="numbered-steps-text-container">
              <h1 class="display-3 font-weight-bold">1</h1>
              <h5>Choose a model</h5>
              <p>
                Select from a catalog of deep learning models or upload your own
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <img class="img-fluid" src={group19} alt="group19" />
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto">
          <img class="img-fluid" src={pointerRight} alt="pointerRight" />
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-6">
          <img class="img-fluid" src={developer} alt="developer" />
        </div>
        <div class="col-lg-6">
          <div class="numbered-steps-container">
            <div class="numbered-shape">
              <img src={rectangle} alt="oval" />
            </div>
            <div class="numbered-steps-text-container">
              <h1 class="display-3 font-weight-bold">2</h1>
              <h5>Develop your application</h5>
              <p>
                Flexible and customizable APIs quickly enable core computer vision services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-10 mx-auto">
          <img class="img-fluid" src={pointerLeft} alt="pointerLeft" />
        </div>
      </div>
    </div>
  );
}

export default NumberedSteps;
