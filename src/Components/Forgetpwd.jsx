import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Forgetpwd() {

  let navigate = useNavigate();

  const [emaillog2, setEmaillog2] = useState("");

  function showpassword() {
    let password = localStorage.getItem("password").replace(/"/g, "");
    let email = localStorage.getItem("email").replace(/"/g, "");

    if (emaillog2 === email) {
      alert("Your Password: "+ password)
    } else {
      alert("Email Id Not Registered")
    }

  }

  return (
    <>
    <div onSubmit={showpassword} className="card border-primary p-5 position-absolute top-50 start-50 translate-middle" style={{width: "30%"}}>
    <form>
        <h3>Reset Password</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmaillog2(event.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </div>
        <button type="button" className="btn btn-outline-success mt-2" onClick={() => {navigate("/")}}>Back To Login Page</button>
      </form>
      </div>
    </>
  )
}

export default Forgetpwd;