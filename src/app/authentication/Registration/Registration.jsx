import React from "react";
import "./Registration.css";
import { useNavigate } from "react-router-dom";

function Registration(){

     const navigate = useNavigate();

     const handlesubmit = (e)=>{
          e.preventDefault();
          const username = e.target.username.value;
          const password = e.target.password.value;
          const email = e.target.email.value;
          const phone_number = e.target.phone_number.value;
          const birth_date = e.target.birth_date.value;
          

          let Login_detail = [{
               "Username" : username,
               "Password" : password,
               "Email": email,
               "Phone":phone_number,
               "Birth":birth_date
          }]

          console.log(Login_detail)
     }

     function Login_nev(){
          navigate("/login");
     }

     return(
          <div className="registration-form">
          <form onSubmit={handlesubmit}>
              <div className="form-icon">
                  <span><i className="bi bi-person-circle"></i></span>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control item" name="username" placeholder="Username"/>
              </div>
              <div className="form-group">
                  <input type="password" className="form-control item" name="password" placeholder="Password"/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control item" name="email" placeholder="Email"/>
              </div>
              <div className="form-group">
                  <input type="text" className="form-control item" name="phone_number" placeholder="Phone Number"/>
              </div>
              <div className="form-group">
                  <input type="date" className="form-control item" name="birth_date" placeholder="Birth Date"/>
              </div>
              <div className="form-group">
                  <button type="submit" className="btn btn-block create-account">Create Account</button>
              </div>
          </form>
          <div className="social-media">
              <h5>Sign up with social media</h5>

               {/* <Link to="login" >Login</Link> */}
               <button type="button"  className="btn btn-block" onClick={Login_nev}>Login</button>

              <div className="social-icons">
                  <a href="#"><i className="bi bi-facebook" title="Facebook"></i></a>
                  <a href="#"><i className="bi bi-google" title="Google"></i></a>
                  <a href="#"><i className="bi bi-twitter-x" title="Twitter"></i></a>
              </div>
          </div>
      </div>
     )
}

export default Registration;