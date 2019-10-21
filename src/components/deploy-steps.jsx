import React from "react";
import NumberedSteps from './numbered-steps.jsx'

function DeploySteps(props) {
  return (
    <div>
      <div class="container">
        <div class="col mx-auto text-lg-center">
          <h3>Deploy to the edge in minutes, not weeks</h3>
          <p class="lead">
            Our easy-to-use platform brings together model frameworks, APIs and
            embedded environments in just three steps:
          </p>
        </div>
      </div>
      <NumberedSteps/>
    </div>
  );
}

export default DeploySteps;
