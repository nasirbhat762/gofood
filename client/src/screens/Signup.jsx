import React, { useState } from "react";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom"


export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });

      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid credentials");
      }
      if (json.success) {
        navigate("/login")
      }
    } catch (error) {
      console.error("Error:", error);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Nav />
      <div className="container w-25">
        <h1>Signup here</h1>
        <form onSubmit={handleSubmit} class="needs-validation" novalidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>

        </form>

        <Link className="btn btn-success my-2" to="/login">
          Already a user
        </Link>

      </div>
    </div>
  );
}
