import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Student() {
  return (
    <div className="student">
      <Outlet />
      <Header type="student" />
    </div>
  );
}

export default Student;