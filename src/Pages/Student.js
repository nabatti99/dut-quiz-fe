import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

function Student() {
  //LayStudentInfo

  return (
    <div className="student">
      <Header type="student" />
      <Outlet />
    </div>
  );
}

export default Student;
