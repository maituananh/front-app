import "../css/Login.module.css";
import cx from "classnames";

function Login() {
  return (
    <div className="login-container">
      <h1 className="logo"> 🍀 Login Pawn Shop </h1>

      <div className="title"> Email </div>
      <div className="input-box-email">
        <input type="email" placeholder="Email Address" value="abc@gmail.com" />
      </div>

      <div className="title"> Password </div>
      <div className="input-box-password">
        <input type="password" placeholder="Password" value="123456789" />
      </div>

      <div className="options">
        <label>
          <input type="checkbox" /> Remember me{" "}
        </label>
        <a href="#"> Forgot Password </a>
      </div>

      <button className="login-btn"> Login </button>
    </div>
  );
}

export default Login;
