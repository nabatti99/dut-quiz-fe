import "./home.css";
import { Routes, Route } from "react-router-dom";
import Login from "./login";

function Home() {
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
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Home;
