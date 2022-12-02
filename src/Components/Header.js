import { Link } from "react-router-dom";
import Avatar from "./Avatar/Avatar.js";
import "./Header.css";
function Header(props) {
  return (
    <div
      className={props.type === "student" ? "studentHeader" : "teacherHeader"}
    >
      <Link to="/student">
        <div className="logo"></div>
      </Link>

      <span className="title">
        HỆ THỐNG THI TRẮC NGHIỆM TRỰC TUYẾN <br />
        KHOA CÔNG NGHỆ THÔNG TIN - ĐẠI HỌC BÁCH KHOA - ĐẠI HỌC ĐÀ NẴNG{" "}
      </span>

      <Avatar />
    </div>
  );
}

export default Header;
