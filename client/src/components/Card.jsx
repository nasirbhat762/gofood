import React, { useEffect, useState } from "react";

export default function Card({ data }) {
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState(null)

  // useEffect(() => {
  //   setPrice(quantity * size)
  // }, [quantity, size])

  let object = data.options[0];
  let keys = Object.keys(object)
 

  let options = [1, 2, 3, 4, 5];
  return (
    <div >
      <div className="card  my-2" style={{ width: "18rem", backgroundColor: "#bab8b8" }}>
        <img src={data.img} className="card-img-top" alt="..." style={{ height: "180px" }} />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.description} </p>
          <div className="d-flex gap-2">
            <select className="form-select " name="" id="" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
              {options.map((element, index) => {
                return (
                  <option key={index + 1} value={element}>
                    {element}
                  </option>
                );
              })}
            </select>

            <select className="form-select " name="" id=""  onChange={(e) => { setSize(e.target.value) }}>
              {keys.map((item) => {
                return <option key={item} value={object.item}>{item}</option>
              })}


            </select>

            <span>{size}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
