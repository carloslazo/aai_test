import React from "react";
import houseCopy from "../assets/house-copy.svg";
import robotCopy from "../assets/robot-copy.svg";
import assemblyCopy from "../assets/assembly-copy.svg";
import seatbeltCopy from "../assets/seatbelt-copy.svg";

function CardDeck(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-3 mb-5">
          <div class="deck-container">
            <div class="deck-image-container">
              <img src={houseCopy}/>
            </div>
            <div class="deck-text-container text-center">
              <h5 class="font-weight-bold">
                Smart Home
              </h5>
              <p class="font-weight-bold">
                Detect unknown visitors vs recognized faces and even pets!
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-5">
          <div class="deck-container">
            <div class="deck-image-container">
              <img src={robotCopy}/>
            </div>
            <div class="deck-text-container text-center">
              <h5 class="font-weight-bold">Robotics</h5>
              <p class="font-weight-bold">
                Give your drones and robots smart vision for instant decisions.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-5">
          <div class="deck-container">
            <div class="deck-image-container">
              <img src={assemblyCopy}/>
            </div>
            <div class="deck-text-container text-center">
              <h5 class="font-weight-bold">Manufacturing</h5>
              <p class="font-weight-bold">
                Optimize quality control and develop human- machine-interfaces.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 mb-5">
          <div class="deck-container">
            <div class="deck-image-container">
              <img src={seatbeltCopy}/>
            </div>
            <div class="deck-text-container text-center">
              <h5 class="font-weight-bold">Transportation</h5>
              <p class="font-weight-bold">
                Make drivers safer with obstacle avoidance and dozing alerts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDeck;
