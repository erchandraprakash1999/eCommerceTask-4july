import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import img1 from "./assets/coffeeA.jpg";
import img2 from "./assets/laptopA.jpg";
import img3 from "./assets/avatar1.jpg";
import img4 from "./assets/avatar2.jpg";
import img5 from "./assets/bikeavatar.webp";
import img6 from "./assets/books.png";
import img7 from "./assets/car.jpg";
import img8 from "./assets/computer.jpg";
import img9 from "./assets/hammer.png";
import img10 from "./assets/download.png";
import img11 from "./assets/equipments.jpg";
import img12 from "./assets/fitness.jpg";
import img13 from "./assets/fridge.jpg";
import img14 from "./assets/mobile.png";

import img15 from "./assets/home.jpg";
import img16 from "./assets/sofa.jpg";
import img17 from "./assets/womenavatar.jpg";
import img18 from "./assets/videogames.png";

import carta from "./assets/cart.avif";
import cartc from "./assets/cart3.png";
import cartb from "./assets/images (3).png";
import build from "./assets/g.png";
function App() {
  return (
    <>
      <header
        className="header text-left"
        style={{ backgroundColor: "#D3D3D3", marginBottom: "0px" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 text-left mt-2">
              <p>
                <i class="fa-solid fa-phone mr-1"></i>
                +000 0000 0000
              </p>
            </div>
            <div className="col-md-6 text-md-right">
              <div className="dropdown d-inline-block">
                <button
                  style={{
                    backgroundColor: "rgb(211, 211, 211)",
                    color: "black",
                  }}
                  className="btn btn-secondary dropdown-toggle p-2"
                  type="button"
                  id="#dropdownMenu"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid fa-globe mr-2"></i>
                  English
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li>
                    <a className="dropdown-item" href="#">
                      language 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      language 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      language 3
                    </a>
                  </li>
                </ul>
                <div className="d-inline-block ms-3">
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {" "}
                    Sign in / Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-md bg-light" id="navbar">
          <a
            href=""
            className="navbar-brand text-dark ml-5"
            style={{ fontSize: "x-large", fontWeight: "bolder" }}
          >
            LOGO
          </a>
          <i
            className="fa fa-bars navbar-toggler mr-3"
            style={{ fontSize: "30px" }}
            data-toggle="collapse"
            data-target="#menu"
          ></i>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav " style={{ marginRight: "8%" }}>
              <li className="nav-item text-dark">
                <a href="#" className="nav-link ml-3 ">
                  Home
                </a>
              </li>

              <li className="nav-item text-dark ">
                <a href="#3" className="nav-link ml-3">
                  Cateogories
                </a>
              </li>
            </ul>

            <form
              class="form-inline my-2 "
              style={{ marginRight: "10%", marginLeft: "10px" }}
            >
              <input
                class="form-control mr-2 "
                type="search"
                placeholder="Search"
                aria-label=""
                style={{ width: " 80%" }}
              />
              <button class="btn btn-outline-success \" type="submit">
                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
            <div style={{ marginRight: "3%" }}>
              <button
                type="button"
                class="btn btn-warning  btn-outline-primary text-dark"
                style={{ marginRight: "50px", marginLeft: "10px" }}
              >
                Create New Listing
              </button>
            </div>
            <span className="p-3" style={{ marginRight: "0px" }}>
              <i class="fa-regular fa-bell mr-3 ml-2 mt-2"></i>

              <i class="fa-regular fa-message mr-3 ml-2 mt-2"></i>
              <i class="fa-regular fa-heart mr-3 ml-2 mt-2 "></i>
            </span>
          </div>
        </nav>
        <div
          className="jumbotron py-0 mb-0"
          style={{ backgroundColor: "#D3D3D3", marginBottom: "1px" }}
        >
          <div className="row  p-3 ">
            <div className="col-md-2 dropdown h5">
              <i
                className="fa-sharp fa-solid fa-bars mr-1"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></i>
              All Categories
              <div
                id="list"
                className="dropdown-menu bg-light"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Category 1
                </a>
                <a className="dropdown-item" href="#">
                  Category 2
                </a>
                <a className="dropdown-item" href="#">
                  Category 3
                </a>
                <a className="dropdown-item" href="#">
                  Category 4
                </a>
                <a className="dropdown-item" href="#">
                  Category 5
                </a>
                <a className="dropdown-item" href="#">
                  Category 6
                </a>
                <a className="dropdown-item" href="#">
                  Category 7
                </a>
              </div>
            </div>
            <div className="col-md-2">
              <a
                href=""
                className="h6"
                style={{ textDecoration: "none", fontWeight: "normal" }}
              >
                Mobile Phones
              </a>
            </div>
            <div className="col-md-2">
              <a
                href=""
                className="h6 ml-4"
                style={{ textDecoration: "none", fontWeight: "normal" }}
              >
                Cars
              </a>
            </div>
            <div className="col-md-2">
              <a
                href=""
                className="h6"
                style={{ textDecoration: "none", fontWeight: "normal" }}
              >
                MotorCycles
              </a>
            </div>

            <div className="col-md-2">
              <a
                href=""
                className="h6"
                style={{ textDecoration: "none", fontWeight: "normal" }}
              >
                TV video/audio
              </a>
            </div>
            <div className="col-md-2">
              <a
                href=""
                className="h6"
                style={{ textDecoration: "none", fontWeight: "normal" }}
              >
                Land and plot
              </a>
            </div>
          </div>
        </div>
      </header>
     
      <section style={{background:"#E9ECEF "}} className="mt-0 mb-0">
        <div className="container-fluid mt-1">
          <div className="row mt-0 pl-1">
            <div className="col-md-6  ">
              <img
                src={img1}
                alt=""
                style={{
                  height: "60vh",
                  width: "96%",
                  border: "2px blue solid",
                }}
              />
            </div>
            <div className="col-md-6 col-sm-12 ">
              <img
                src={img2}
                alt=""
                style={{
                  height: "60vh",
                  width: "96%",
                  border: "2px blue solid",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="">
        <div className="jumbotron mb-0 mt-0">
          <div className="row mt-5">
            <div className="col-md-12 d-flex justify-content-between ">
              <h2
                className="text-primary mb-3"
                style={{ display: "inline-block", fontWeight: "bolder" }}
              >
                All Categories
              </h2>
              <span
                className=" text-warning mr-2 h4"
                style={{ fontSize: "x-large", fontWeight: "normal" }}
              >
                Display all <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <h5
                className="text-center mt-3 mb-3"
                style={{ borderBottom: "2px red solid" }}
                
              >
                SPORTS Category
              </h5>
              <div className="d-flex justify-content-evenly text-center">
                <span>
                  <img
                    src={img3}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img4}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
            <div className="col-sm-3">
            <h5
                className="text-center mt-3 mb-3"
                style={{ borderBottom: "2px red solid" }}
                
              >
                FASHION Category
              </h5>
              <div className="d-flex justify-content-evenly text-center">
                <span>
                  <img
                    src={img5}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img6}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
            <div className="col-sm-3">
            <h5
                className="text-center mt-3 mb-3"
                style={{ borderBottom: "2px red solid" }}
                
              >
                SPORTS Category
              </h5>
              <div className="d-flex justify-content-evenly text-center ">
                <span>
                  <img
                    src={img7}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img8}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
            <div className="col-sm-3">
            <h5
                className="text-center mt-3 mb-3"
                style={{ borderBottom: "2px red solid" }}
                
              >
                SPORTS Category
              </h5>
              <div className="d-flex justify-content-evenly text-center">
                <span>
                  <img
                    src={img9}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img10}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="d-flex justify-content-evenly text-center">
                <span>
                  <img
                    src={img11}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img12}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="d-flex justify-content-evenly text-center">
                <span>
                  <img
                    src={img13}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img14}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="d-flex justify-content-evenly text-center ">
                <span>
                  <img
                    src={img15}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img16}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="d-flex justify-content-evenly text-center">
                <span>
                  <img
                    src={img17}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img18}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="d-flex justify-content-evenly text-center">
                <span>
                  <img
                    src={img9}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img6}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="d-flex justify-content-evenly text-center">
                <span>
                  <img
                    src={img15}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
                <span>
                  <img
                    src={img8}
                    alt=""
                    width={"75"}
                    height={"75"}
                    style={{ border: "1px black solid", borderRadius: "50%" }}
                  />

                  <p>Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section>
        <div className="jumbotron mb-0 mt-0">
          <div className="row mt-5">
            <div className="col-md-12 d-flex justify-content-between ml-3">
              <h2
                className="text-primary"
                style={{ display: "inline-block", fontWeight: "bolder" }}
              >
                Properties for Sale
              </h2>
              <span
                className=" text-warning mr-2 h4"
                style={{ fontSize: "x-large", fontWeight: "normal" }}
              >
                Display all <i class="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-2 ">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-outline-secondary pt-2 pb-2 mt-1"
              >
                Apartments for Sale
              </button>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-outline-secondary pt-2 pb-2 mt-1"
              >
                Apartments for Sale
              </button>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-outline-secondary pt-2 pb-2 mt-1"
              >
                Apartments for Sale
              </button>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-outline-secondary pt-2 pb-2 mt-1"
              >
                Apartments for Sale
              </button>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-outline-secondary pt-2 pb-2 mt-1"
              >
                Apartments for Sale
              </button>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                style={{ width: "100%" }}
                class="btn btn-outline-secondary pt-2 pb-2 mt-1"
              >
                Apartments for Sale
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3   ">
              <div
                class="card"
                style={{ width: "18rem", borderRadius: "30px" }}
              >
                <img
                  class="card-img-top card-header pl-0 pr-0 pt-0 pb-0 "
                  src={build}
                  alt="Card image cap"
                 
                />
                <div class="card-body ">
                  
                <button
                type="button"
                style={{ width: "100%"}}
                class="btn btn-outline-primary pt-2 pb-2 text-secondary mt-1"
              >
                150,000,0 OMR,Commercial
              </button>
           
                </div>
              </div>
            </div>
            <div className="col-md-3   ">
              <div
                class="card"
                style={{ width: "18rem", borderRadius: "30px" }}
              >
                <img
                  class="card-img-top card-header pl-0 pr-0 pt-0 pb-0 "
                  src={build}
                  alt="Card image cap"
                 
                />
                <div class="card-body ">
                  
                <button
                type="button"
                style={{ width: "100%"}}
                class="btn btn-outline-primary pt-2 pb-2 text-secondary"
              >
                150,000,0 OMR,Commercial
              </button>
           
                </div>
              </div>
            </div>
            <div className="col-md-3   ">
              <div
                class="card"
                style={{ width: "18rem", borderRadius: "30px" }}
              >
                <img
                  class="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
                  src={build}
                  alt="Card image cap"
                 
                />
                <div class="card-body ">
                  
                <button
                type="button"
                style={{ width: "100%"}}
                class="btn btn-outline-primary pt-2 pb-2 text-secondary"
              >
                150,000,0 OMR,Commercial
              </button>
           
                </div>
              </div>
            </div>
            <div className="col-md-3   ">
              <div
                class="card"
                style={{ width: "18rem", borderRadius: "30px" }}
              >
                <img
                  class="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
                  src={build}
                  alt="Card image cap"
                 
                />
                <div class="card-body ">
                  
              <button
                type="button"
                style={{ width: "100%"}}
                class="btn btn-outline-primary pt-2 pb-2 text-secondary"
              >
                150,000,0 OMR,Commercial
              </button>
           
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr/>
      <section>
        <div className="jumbotron sticky-bottom mb-0 mt-0" style={{backgroundColor:"#D4F1F4"}}>
          <div className="row">
            <div className="col-md-3 text-center">
            <div
                class="card"
                style={{ border:"2px skyblue solid"}}
              >
                <img
                  class="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
                  src={carta}
                  alt="Card image cap"
                 
                />
                <div class="card-body p-0">
                  
                <button
                type="button"
                style={{ width: "100%"}}
                class="btn btn-outline-secondary p-2 text-light bg-primary"
              >
               Sell Anything Now
              </button>
           
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center ">

               <div
                class="card"
                style={{ border:"2px skyblue solid"}}
              >
                <img
                  class="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
                  src={cartb}
                  alt="Card image cap"
                 
                />
                <div class="card-body p-0">
                  
                <button
                type="button"
                style={{ width: "100%"}}
                class="btn btn-outline-secondary p-2 text-light bg-primary"
              >
               Sell Anything Now
              </button>
           
                </div>
              </div>
            </div>
            <div className="col-md-3 text-center">
            <div
                class="card"
                style={{border:"2px skyblue solid"}}
              >
                <img
                  class="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
                  src={carta}
                  alt="Card image cap"
                 
                />
                <div class="card-body p-0">
                  
                <button
                type="button"
                style={{ width: "100%"}}
                class="btn btn-outline-secondary p-2 text-light bg-primary"
              >
               Sell Anything Now
              </button>
           
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <footer style={{backgroundColor: "#8071d4",border:"2px black solid" }}>
    {/* Remove the container if you want to extend the Footer to full width. */}
    <div className="container-fluid my-0" style={{marginLeft:"0px"}}>
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#8071d4"}}>
          {/* Left */}
          <div className="">
            <span className="h5 text-center">Get connected with us on social networks:</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="#" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  <a href="#!" className="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!" className="text-white">MDWordPress</a>
                </p>
                <p>
                  <a href="#!" className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Bootstrap Angular</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  <a href="#!" className="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Help</a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
    {/* End of .container */}
  </footer>
    </>
  );
}

export default App;
