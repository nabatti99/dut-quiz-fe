import "./login.css";
import { Routes, Route } from "react-router-dom";
import LoginPart from "./loginPart";

function Login() {
  return (
    <div className="login_page">
      <div className="login_title">
        <span id="namepage">HỆ THỐNG THI TRẮC NGHIỆM TRỰC TUYẾN</span>
        <span id="author">
          KHOA CÔNG NGHỆ THÔNG TIN - TRƯỜNG ĐẠI HỌC BÁCH KHOA - ĐẠI HỌC ĐÀ NẴNG
        </span>
      </div>
      <div className="login_part">
        <div id="logo"></div>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPart />} />
            <Route path="/login" element={<LoginPart />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Login;
