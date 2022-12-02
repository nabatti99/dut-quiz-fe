import "./Login.css";
import GreenButton from "../Button/GreenButton";
import RedButton from "../Button/RedButton";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signup">
      <form id="signup">
        <div className="_input">
          <div className="text_input">
            <input
              id="studentname"
              type="text"
              className="input_field"
              placeholder=" "
              required
            ></input>
            <label
              htmlFor="studentname"
              id="studentname_lable"
              className="input_lable"
            >
              Họ và tên
            </label>
          </div>
          <div className="text_input">
            <input
              id="studentID"
              type="text"
              className="input_field"
              placeholder=" "
              required
            ></input>
            <label
              htmlFor="studentID"
              id="username_lable"
              className="input_lable"
            >
              Mã số sinh viên
            </label>
          </div>
          <div className="text_input">
            <input
              id="username"
              type="text"
              className="input_field"
              placeholder=" "
              required
            ></input>
            <label
              htmlFor="username"
              id="username_lable"
              className="input_lable"
            >
              Tên đăng nhập
            </label>
          </div>
          <div className="text_input">
            <input
              id="password"
              type="password"
              className="input_field"
              placeholder=" "
              required
            ></input>
            <label
              htmlFor="password"
              id="password_lable"
              className="input_lable"
            >
              Mật khẩu
            </label>
          </div>
          <div className="text_input">
            <input
              id="passwordConfirm"
              type="password"
              className="input_field"
              placeholder=" "
              required
            ></input>
            <label
              htmlFor="password"
              id="passConfirm_lable"
              className="input_lable"
            >
              Xác nhận lại mật khẩu
            </label>
          </div>
        </div>
        <div className="Loginbutton">
          <GreenButton link="/" value="Đã có tài khoản" />
          <RedButton type="submit" value="Đăng ký" />
        </div>
      </form>
    </div>
  );
}
export default SignUp;
