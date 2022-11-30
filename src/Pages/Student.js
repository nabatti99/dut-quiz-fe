import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Student() {
  return (
    <div className="student">
      <Outlet />
      <Header />
    </div>
  );
}

export default Student;
