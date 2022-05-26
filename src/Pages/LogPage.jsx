import React from "react";
import "./LogPage.css";
// import Box from "@mui/material/Box";
// import Input from "@mui/material/Input";
import { TextField } from "@mui/material";

function LogPage() {
  return (
    <div className="logpage">
      <div className="left1">
        <div className="left-item">
          <h1>Login</h1>
          <p>Get access to your Orders,Wishlist and recommendations</p>
        </div>
      </div>
      <div className="right1">
        <div className="textfields">
          <TextField
            id="standard-basic"
            label="Email/Mobile Number"
            variant="standard"
          />
          <TextField id="standard-basic" label="Password" variant="standard" />
        </div>
        <p>
          By continuing, you agree to Flipkart's Terms of Use and Privacy Policy
        </p>
        <button className="btn logbtn">Login</button> <br />
        OR
        <button className="btn rqtbtn">Request OTP</button>
        <a href="">New to Flipkart? Create an account</a>
      </div>
    </div>
  );
}

export default LogPage;
