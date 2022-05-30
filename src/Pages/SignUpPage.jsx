import React from "react";
import { TextField } from "@mui/material";

function SignUpPage() {
  return (
    <div className="logpage">
      <div className="left1">
        <div className="left-item">
          <h1>Look's like you're new here!</h1>
          <p>Sign up with your mobile number to get started</p>
        </div>
      </div>
      <div className="right1">
        <div className="textfields">
          <TextField
            id="standard-basic"
            label="Email/Mobile Number"
            variant="standard"
          />
        </div>
        <p>
          By continuing, you agree to Flipkart's Terms of Use and Privacy Policy
        </p>
        <button className="btn logbtn">Continue</button> <br />
        <button className="btn rqtbtn">Existing User? Login here</button>
      </div>
    </div>
  );
}

export default SignUpPage;
