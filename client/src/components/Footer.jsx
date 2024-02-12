import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width={30} height={24}>
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="mb-3 mb-md-0  text-white">© 2022 GoFood, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="mx-3">
          <i className="bi bi-facebook"></i>
          </li>
          <li className="mx-3">
          <i className="bi bi-instagram"></i>
          </li>
          <li className="mx-3">
          <i className="bi bi-twitter-x"></i>
          </li>
        </ul>
      </footer>
    </div>
  );
}
