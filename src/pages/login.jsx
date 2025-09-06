import styles from "../css/Login.module.css";
import cx from "classnames";

function Login() {
  return (
    <div className={cx(styles["login-container"])}>
      <h1 className={cx(styles["logo"])}> 🍀 Login Pawn Shop </h1>

      <div className={cx(styles["title"])}> Email </div>
      <div className={cx(styles["input-box-email"])}>
        <input type="email" placeholder="Email Address" value="abc@gmail.com" />
      </div>

      <div className={cx(styles["title"])}> Password </div>
      <div className={cx(styles["input-box-password"])}>
        <input type="password" placeholder="Password" value="123456789" />
      </div>

      <div className={cx(styles["options"])}>
        <label>
          <input type="checkbox" /> Remember me{" "}
        </label>
        <a href="#"> Forgot Password </a>
      </div>

      <button className={cx(styles["login-btn"])}> Login </button>
    </div>
  );
}

export default Login;
