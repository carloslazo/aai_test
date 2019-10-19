import React from 'react';
import logo from '../assets/Logo.svg'

function NavBar(props) {
  return (
    <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-ai">
      <a class="navbar-brand ml-5" href="#">
        <img src={logo} alt="always ai logo"/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Platform</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Company</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Support</a>
          </li>
        </ul>
        
        <ul class="navbar-nav mt-2 mr-5 my-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Models</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Docs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Log in</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
