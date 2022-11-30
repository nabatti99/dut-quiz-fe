import "./Login.css";
import GreenButton from "../Button/GreenButton";
import RedButton from "../Button/RedButton";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <form id="login">
        <div className="_input">
          <div className="text_input">
            <input
              id="username"
              type="text"
              className="input_field"
              placeholder=" "
            ></input>
            <label
              htmlFor="username"
              id="username_lable"
              className="input_lable"
            >
              Username
            </label>
          </div>
          <div className="text_input">
            <input
              id="password"
              type="password"
              className="input_field"
              placeholder=" "
            ></input>
            <label
              htmlFor="password"
              id="username_lable"
              className="input_lable"
            >
              Password
            </label>
          </div>
        </div>
        <Link to="reset-password" id="passforget">
          Quên mật khẩu? Nhấn vào đây
        </Link>
        <div className="Loginbutton">
          <RedButton link="/signUp" value="Đăng ký" />
          <GreenButton link="/student" value="Đăng nhập" />
        </div>
      </form>
    </div>
  );
}

export default Login;
