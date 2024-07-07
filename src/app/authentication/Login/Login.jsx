import React from "react";
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login(){

     const handlesubmit = (e)=>{
          e.preventDefault();
          const username = e.target.username.value;
          const password = e.target.password.value;
          
          let Login_detail = [{
               "Username" : username,
               "Password" : password
          }]

          console.log(Login_detail)
     }

     const navigate = useNavigate();

     function Login_nev(){
          navigate("/registration");
     }

     return(
     <div className="Login">  
          <div className="container">
               <div className="screen">
                    <div className="screen__content">
                         <form className="login" onSubmit={handlesubmit}>
                              <div className="login__field">
                                   {/* <i className="login__icon fas fa-user"></i> */}
                                   <i className="login__icon bi bi-person-circle"></i>
                                   <input type="text" name="username" className="login__input" placeholder="User name / Email"/>
                              </div>
                              <div className="login__field">
                                   {/* <i className="login__icon fas fa-lock"></i> */}
                                   <i className="login__icon bi bi-file-lock2"></i>
                                   <input type="password" name="password" className="login__input" placeholder="Password"/>
                              </div>
                              <button className="button login__submit">
                                   <span className="button__text">Log In Now</span>
                                   {/* <i className="button__icon fas fa-chevron-right"></i> */}
                                   <i className="button__icon bi bi-chevron-right"></i>
                                   
                              </button>				
                         </form>
                         <div className="social-login">
                              <h3>log in via</h3>
                              <button type="button"  class="btn btn-block" onClick={Login_nev}>Registration</button>
                              <div className="social-icons">
                                   <i className="social-login__icon bi bi-instagram"></i>
                                   {/* <a href="#" className="social-login__icon fab fa-instagram"></a> */}
                                   <i className="social-login__icon bi bi-facebook"></i>
                                   {/* <a href="#" className="social-login__icon fab fa-facebook"></a> */}
                                   <i className="social-login__icon bi bi-twitter-x"></i>
                                   {/* <a href="#" className="social-login__icon fab fa-twitter"></a> */}
                              </div>
                         </div>
                    </div>
                    
                    <div className="screen__background" >
                         <span className="screen__background__shape screen__background__shape4"></span>
                         <span className="screen__background__shape screen__background__shape3"></span>		
                         <span className="screen__background__shape screen__background__shape2"></span>
                         <span className="screen__background__shape screen__background__shape1"></span>
                    </div>		
               </div>
          </div>
     </div>   
     )

}
export default Login;