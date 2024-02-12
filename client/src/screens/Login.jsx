import React, { useState } from "react";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom"


export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email, password: password }),
            });

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                alert("Enter valid credentials");
            }
            if (json.success) {
               navigate("/")
               localStorage.setItem("authToken", json.authToken)
               console.log(localStorage.authToken)
            }
        } catch (error) {
            // console.error("Error:", error);
        }

        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <Nav />
            <div className="container w-25">
                <h1>login here</h1>
                <form onSubmit={handleSubmit}>

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
                        />
                    </div>

                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>

                </form>

                <Link className="btn btn-danger my-2" to="/signup">
                    I don't have account
                </Link>

            </div>
        </div>
    );
}
