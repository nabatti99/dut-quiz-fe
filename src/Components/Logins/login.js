import "./home.css";
import GreenButton from "../Button/GreenButton";
import RedButton from "../Button/RedButton";
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
            <label for="username" id="username_lable" className="input_lable">
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
            <label for="password" id="username_lable" className="input_lable">
              Password
            </label>
          </div>
        </div>
        <a href="#" id="passforget">
          Quên mật khẩu? Nhấn vào đây
        </a>
        <div className="Loginbutton">
          <RedButton link="/signUP" value="Đăng ký" />
          <GreenButton link="/login" value="Đăng nhập" />
        </div>
      </form>
    </div>
  );
}

export default Login;
