import "./home.css";
import GreenButton from "../Button/GreenButton";
import RedButton from "../Button/RedButton";
function SignUp() {
  return (
    <div>
      <form id="signUp">
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
            <label for="password" id="password_lable" className="input_lable">
              Password
            </label>
          </div>
          <div className="text_input">
            <input
              id="confirm_password"
              type="password"
              className="input_field"
              placeholder=" "
            ></input>
            <label
              for="confirm_password"
              id="confirmpass_lable"
              className="input_lable"
            >
              Confirm Password
            </label>
          </div>
        </div>
        <div className="Loginbutton">
          <GreenButton link="/login" value="Đăng nhập" />
          <RedButton link="/signUP" value="Đăng ký" />
        </div>
      </form>
    </div>
  );
}
export default SignUp;
