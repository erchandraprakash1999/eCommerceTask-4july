import React from 'react';
import img1 from "../assets/coffeeA.jpg";
import img2 from "../assets/laptopA.jpg";
import img3 from "../assets/avatar1.jpg";
import img4 from "../assets/avatar2.jpg";
import img5 from "../assets/bikeavatar.webp";
import img6 from "../assets/books.png";
import img7 from "../assets/car.jpg";
import img8 from "../assets/computer.jpg";
import img9 from "../assets/hammer.png";
import img10 from "../assets/download.png";
import img11 from "../assets/equipments.jpg";
import img12 from "../assets/fitness.jpg";
import img13 from "../assets/fridge.jpg";
import img14 from "../assets/mobile.png";

import img15 from "../assets/home.jpg";
import img16 from "../assets/sofa.jpg";
import img17 from "../assets/womenavatar.jpg";
import img18 from "../assets/videogames.png";

import carta from "../assets/cart.avif";
import cartc from "../assets/cart3.png";
import cartb from "../assets/images (3).png";
import build from "../assets/g.png";
import "../App.css";


const Home = () => {
    return (
        <>
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
          <div className="col-6 col-md-3">
          <div className="card text-center" style={{ width: "100%", borderRadius: "30px" }}>
            <img
              className="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
              src={build}
              alt="Card image cap"
            />
            <div className="card-body">
            <button
                type="button"
                style={{ width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                className="btn btn-outline-primary pt-1 pb-1 text-secondary mt-1"
              >
                150,000,0 OMR, Commercial
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card text-center" style={{ width: "100%", borderRadius: "30px" }}>
            <img
              className="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
              src={build}
              alt="Card image cap"
            />
            <div className="card-body">
            <button
                type="button"
                style={{ width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                className="btn btn-outline-primary pt-1 pb-1 text-secondary mt-1"
              >
                150,000,0 OMR, Commercial
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card text-center" style={{ width: "100%", borderRadius: "30px" }}>
            <img
              className="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
              src={build}
              alt="Card image cap"
            />
            <div className="card-body">
            <button
                type="button"
                style={{ width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                className="btn btn-outline-primary pt-1 pb-1 text-secondary mt-1"
              >
                150,000,0 OMR, Commercial
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card text-center" style={{ width: "100%", borderRadius: "30px" }}>
            <img
              className="card-img-top card-header pl-0 pr-0 pt-0 pb-0"
              src={build}
              alt="Card image cap"
            />
            <div className="card-body">
            <button
                type="button"
                style={{ width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                className="btn btn-outline-primary pt-1 pb-1 text-secondary mt-1"
              >
                150,000,0 OMR, Commercial
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
            
        </>
    );
}

export default Home;