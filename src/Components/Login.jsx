import React, { useState } from 'react';
import { useNavigate } from 'react-router';


function Login() {

  let navigate = useNavigate();

  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  function handleLogin() {
    let email = localStorage.getItem("email").replace(/"/g, "");
    let password = localStorage.getItem("password").replace(/"/g, "");

    if(passwordlog === password && emaillog === email) {
      navigate("/home")
    } else {
      alert("Invalid Credential")
    }
  }


  return (
    <>
      <form onSubmit={handleLogin} className="card border-primary p-5 position-absolute top-50 start-50 translate-middle" style={{width: "30rem"}}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(event) => setEmaillog(event.target.value)} required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(event) => setPasswordlog(event.target.value)} required
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-between mt-3">
        <button type="button" className="btn btn-outline-danger" onClick={() => {navigate("/password-reset")}}>Forgot Password</button>
        <button type="button" className="btn btn-outline-info" onClick={() => {navigate("/signup")}}>Create Account</button>
        </div>
      </form>
    </>
  )
}
export default Login;

// onClick={() => {navigate("/home")}}