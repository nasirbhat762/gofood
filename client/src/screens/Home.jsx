import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card from "../components/Card";

export default function Home() {

  const [data, setData] = useState([]);
  const [cat, setCat] = useState([]);
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    try {
      let response = await fetch('http://localhost:8080/displayFood');
      let pureData = await response.json();
      setData(pureData[0]);
      setCat(pureData[1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div>
      <div>
        <Nav />

      </div>
      <div className="my-2">
        <div className="container" style={{ width: "100%", height: "300px" }}>
          <div id="carouselExampleCaptions" className="carousel slide rounded-2">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={{ width: "100%", height: "300px" }}
                  src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.1.1474850327.1702840669&semt=ais"
                  className="d-block w-100 rounded-2 "
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <button className="btn btn-success" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: "100%", height: "300px" }}
                  src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.1.1474850327.1702840669&semt=ais"
                  className="d-block w-100 rounded-2 "
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <button className="btn btn-success" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: "100%", height: "300px" }}
                  src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.1.1474850327.1702840669&semt=ais"
                  className="d-block w-100 rounded-2 "
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <div className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={search}
                      onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <button className="btn btn-success" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div className=" container my-2  d-flex flex-column  justify-content-between   flex-wrap ">
        {cat &&
          cat.map((foodCategory, index) => {
            return (<div key={index}>
              <div className="fs-3"> {foodCategory.CategoryName}  </div>
              <hr />
              <div className="d-flex flex-row gap-4 flex-wrap justify-content-start">
                {data && data.filter((fooditem) => {  return (fooditem.CategoryName === foodCategory.CategoryName) &&(fooditem.name.toLowerCase().includes(search)) }).map((items, index) => {
                  return (<div key={index}><Card data={items} /></div>)
                })}
              </div>

            </div>)

          }

          )}
      </div>
      <div>

        <Footer />
      </div>
    </div>
  );
}
