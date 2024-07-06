import React from 'react';
import {NavLink} from "react-router-dom"


const Header = () => {
    return  (
      <>
        <style>
          {`
            .active {
              color: red;
            }
          `}
        </style>
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
          href='#'
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
                <NavLink to="/" className="nav-link ml-3 ">
                  Home
                </NavLink>
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
              <NavLink
                to="/pageb"
                className="h6"
                style={{ textDecoration: "none", fontWeight: "normal" }}
              >
                PageB
              </NavLink>
            </div>
            <div className="col-md-2">
              <NavLink
                to="/pagec"
                className="h6"
                style={{ textDecoration: "none", fontWeight: "normal" }}
              >
                PageC
              </NavLink>
            </div>
            <div className="col-md-2">
              <a
                href=""
                className="h6 ml-0"
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
           
          </div>
        </div>
      </header>
     

            
        </>
    );
}

export default Header;
