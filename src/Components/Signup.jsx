import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Signup() {

    let navigate = useNavigate();
    
    let [email, setEmail] = useState("");
    let [password,setPassword] = useState("");

    function handleSubmit(){
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));
        alert("Sign Up Successful")
    }

    return (
        <>
            <div className="card border-primary p-5 position-absolute top-50 start-50 translate-middle" style={{width: "40%"}}>
                <form onSubmit={handleSubmit} >
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name" required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Mobile Number</label>
                        <input type="number" 
                        className="form-control" 
                        placeholder="Mobile Number" required/> 
                    </div>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)} required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(event) => setPassword(event.target.value)} required
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary" >
                            Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-3">
                        Already Registered <button type="button" className="btn btn-outline-success mt-2 btn-sm" onClick={() => {navigate("/")}}>Login Now</button>
                    </p>
                </form>
            </div>
        </>
    )
}

export default Signup;
