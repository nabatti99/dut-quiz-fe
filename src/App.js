import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Logins/Home";
import ExamList from "./Pages/ExamList";
import Login from "./Components/Logins/Login";
import ForgotPass from "./Components/Logins/ForgotPass";
import SignUp from "./Components/Logins/SignUp";
import Student from "./Pages/Student";
import Result from "./Pages/Result";
import TakingExam from "./Pages/Taking";
import Teacher from "./Pages/Teacher";
import Testpage from "./Pages/Testpage";
import { useEffect } from "react";
import GetTest from "./Pages/GetTest";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (
      window.location.pathname === "/" &&
      (token !== "" || token === undefined)
    ) {
      window.location.pathname = "/student";
    }
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/reset-password" element={<ForgotPass />} />
          </Route>
          <Route path="/student" element={<Student />}>
            <Route index element={<ExamList />} />
            <Route path="list" element={<ExamList />} />
            <Route path="results" element={<Result />} />
            <Route path="getTest" element={<GetTest />}>
              <Route path=":examID" element={<TakingExam />} />
            </Route>
          </Route>

          <Route path="/teacher" element={<Teacher />} />
          <Route path="/test" element={<Testpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
