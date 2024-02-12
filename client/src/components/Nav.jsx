import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate()
  let token = localStorage.getItem("authToken")
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-black" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <i className="fa-solid fa-bowl-food fa-2xl" style={{color: "#ffffff"}}></i> GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/features">
                  Features
                </Link>
              </li> */}
            </ul>
            <span className="navbar-text d-flex gap-2">
              {token != null ? <div><ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="btn btn-success" to="/signup">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger mx-1" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul> </div> : <div> <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="btn btn-success" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-success mx-1" to="/login">
                    Login
                  </Link>
                </li>
              </ul></div>}

            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
