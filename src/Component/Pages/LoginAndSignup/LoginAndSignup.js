import React from "react";
import { Container } from "react-bootstrap";
import "./LoginAndSignup.css";

const LoginAndSignup = () => {
  React.useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");
    
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  });

  return (
    <div className="LoginAndSignup-body">
      <Container className="LoginAndSignup-container" id="container">
        <div className="form-container sign-up-container">
          <form className="LoginAndSignup-form" action="#">
            <h1 className="LoginAndSignup-h1">Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="LoginAndSignup-span">or use your email for registration</span>
            <input className="LoginAndSignup-input" type="text" placeholder="Name" />
            <input className="LoginAndSignup-input" type="email" placeholder="Email" />
            <input className="LoginAndSignup-input" type="password" placeholder="Password" />
            <button className="LoginAndSignup-button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="LoginAndSignup-form" action="#">
            <h1 className="LoginAndSignup-h1">Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="LoginAndSignup-span">or use your account</span>
            <input className="LoginAndSignup-input" type="email" placeholder="Email" />
            <input className="LoginAndSignup-input" type="password" placeholder="Password" />
            <a className="LoginAndSignup-forgotpass" href="#">Forgot your password?</a>
            <button className="LoginAndSignup-button">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 className="LoginAndSignup-h1">Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="LoginAndSignup-button ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 className="LoginAndSignup-h1">Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="LoginAndSignup-button ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginAndSignup;
