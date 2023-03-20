import login_img from "./login_img.jpg";
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setcheck] = useState("");
    const submitForm = (e) => {
      e.preventDefault();
      if (password.length >= 6) {
        
        return navigate("/home");
      } else {
        
        alert("Invalid userId and password");
      }
    };

  return (
    <div className="login_main_container ">
      {/* <button><Link to={"/home"}>Go to Home</Link></button> */}
      <div className="lg_second_container">
        <div className="form_container">
          <h1>Welcome back to Pretty Login</h1>
          <h5>It's great to have you back!</h5>

          <form id="form_id" onSubmit={submitForm}>
            <label htmlFor="email" >EMAIL</label>
            <br />
            <input
              type="email"
              id="email"
              className="inpt_size"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <br />
            <label htmlFor="password">PASSWORD</label>
            <br />
            <input
              type="password"
              id="password"
              className="inpt_size"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
              type="checkbox"
              id="remember"
              value={check}
              className=" checkbox_btn mg_tp_5px"
              onChange={(e) => setcheck(e.target.value)}
            />
            <label htmlFor="remember">Remember me?</label>
            <span className="forgatepass_span">Forgat password?</span>
            <br />
           
            <button type="submit" className="btn m_rt lg_btn" ><Link className="lg_link_btn link_btn" type="submit">LOGIN</Link ></button>
            
            <button  className="btn crt_btn m_rt">
              <Link to={"/form"}  className="crt_link_btn link_btn  text_color_btn">CREATE ACCOUNT</Link >
              </button>
          </form>
          <div className="lg_with_container">
            <span>or login with</span>
            <br />
            <input
              type="button"
              value="Facebook"
              className=" lg_with_btn text_color_btn lg_fb_btn m_rt"
            />
            <input
              type="button"
              value="Google"
              className="text_color_btn lg_google_btn m_rt lg_with_btn"
            />
          </div>
        </div>
        <div className="lg_pg_img_container">
          <img src={login_img} alt="login_img" className="lg_pg_img" />
        </div>
      </div>
    </div>
  );
};
export default Login;
