import React from "react";
import houseCopy from "../assets/house-copy.svg";

function CardDeck(props) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="deck-container">
            <div class="deck-image-container">
              <img src={houseCopy}/>
            </div>
            <div class="deck-text-container text-center">
              <h5 class="font-weight-bold">Smart Home</h5>
              <p class="font-weight-bold">Detect unknown visitors vs recognized faces and even pets!</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="deck-container">
            <div class="deck-image-container">
              <img src={houseCopy}/>
            </div>
            <div class="deck-text-container text-center">
              <h5 class="font-weight-bold">Smart Home</h5>
              <p class="font-weight-bold">Detect unknown visitors vs recognized faces and even pets!</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="deck-container">
            <div class="deck-image-container">
              <img src={houseCopy}/>
            </div>
            <div class="deck-text-container text-center">
              <h5 class="font-weight-bold">Smart Home</h5>
              <p class="font-weight-bold">Detect unknown visitors vs recognized faces and even pets!</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="deck-container">
            <div class="deck-image-container">
              <img src={houseCopy}/>
            </div>
            <div class="deck-text-container text-center">
              <h5 class="font-weight-bold">Smart Home</h5>
              <p class="font-weight-bold">Detect unknown visitors vs recognized faces and even pets!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDeck;
