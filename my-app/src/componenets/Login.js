import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./Login.css"
import { useNavigate } from "react-router-dom";




function Login() {
  let navigate = useNavigate();


  function handleClick() {
    navigate('/Home')
  }

  
    return(
      <div>
           <div className="App">
          <div class="container-fluid ps-md-0">
              <div class="row g-0">
                <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                <div class="col-md-8 col-lg-6">
                  <div class="login d-flex align-items-center py-5">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-9 col-lg-8 mx-auto">
                          <h3 class="login-heading mb-4">Welcome back!</h3>
            
                          
                          <form>
                            <div class="form-floating mb-3">
                              <input type="email" className={"form-control " } id="floatingInput" name='email' placeholder="name@example.com" />
                              <label for="floatingInput">Email address</label>
                              <span className="text-danger"></span>
                            </div>
                            <div class="form-floating mb-3">
                              <input type="password" className={"form-control " } id="floatingPassword" name="password" placeholder="Password"  />
                              <label for="floatingPassword">Password</label>
                              <span className="text-danger"></span>
                            </div>
            
                            <div class="form-check mb-3">
                              <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
                              <label class="form-check-label" for="rememberPasswordCheck">
                                Remember password
                              </label>
                            </div>
            
                            <div class="d-grid">
                             < button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button"  onClick={handleClick}>login</button>
                              <div class="text-center">
                                <a class="small" href="#top">Forgot password?</a>
                              </div>
                            </div>
            
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
      </div>
    );
  }
  export default Login ; 
