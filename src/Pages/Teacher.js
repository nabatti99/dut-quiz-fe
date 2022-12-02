import { Outlet } from "react-router-dom";
import "./Teacher.css";
import Header from "../Components/Header";

function Teacher() {
  return (
    <div className="teacher">
      <Outlet />
      <Header type="teacher" />
    </div>
  );
}

export default Teacher;
