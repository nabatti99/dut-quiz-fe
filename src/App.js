import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useRef } from "react";
import Home from "./Components/Logins/Home";
import ExamList from "./Pages/ExamList";
import Login from "./Components/Logins/Login";
import ForgotPass from "./Components/Logins/ForgotPass";
import SignUp from "./Components/Logins/SignUp";
import Student from "./Pages/Student";
import Result from "./Pages/Result";
import Calendar from "./Pages/Calendar";
import TakingExam from "./Pages/Taking";

function App() {
  let idRefs = [];

  const getExamsList = (examId) => {
    idRefs.push(examId);
  };
  useEffect(() => {
    console.log(idRefs);
  });
  useEffect(() => {
    idRefs = [];
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/student" element={<Student />}>
            <Route index element={<ExamList callback={getExamsList} />} />
            <Route
              path="/student/list"
              element={<ExamList callback={getExamsList} />}
            />
            <Route path="/student/results" element={<Result />} />
            <Route path="/student/calendar" element={<Calendar />} />
          </Route>
          <Route path="/student/taking" element={<div></div>} />

          <Route exact path="/" element={<Home />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/reset-password" element={<ForgotPass />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
