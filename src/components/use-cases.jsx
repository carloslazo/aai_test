import React from "react";
import CardDeck from "./card-deck.jsx";

function UseCases(props) {
  return (
    <div class="container-fluid my-5 background-color-cases">
      <div class="row">
        <div class="col mx-auto my-5 text-lg-center">
          <h3>
            Transform your business with computer vision
          </h3>
          <p class="lead">
            Make smarter decisions in real-time and create new revenue
            opportunities with intelligent sight anywhere.
          </p>
          <h6>
            <a class="text-dark font-weight-bold" href="#">
              See all use cases <i class="fas fa-arrow-right" />
          </a>
        </h6>
      </div>
    </div>
    <div class="row">
      <div class="col-lg mx-auto">
      <CardDeck/>
      </div>
    </div>
  </div>
);
}

export default UseCases;
