import "./Login.css";
import { Outlet } from "react-router-dom";

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
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
