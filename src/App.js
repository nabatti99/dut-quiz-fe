import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
import Home from "./Components/Logins/Home";
import ExamList from "./Pages/ExamList";
import Login from "./Components/Logins/Login";
import ForgotPass from "./Components/Logins/ForgotPass";
import SignUp from "./Components/Logins/SignUp";
import Student from "./Pages/Student";
import Result from "./Pages/Result";

import TakingExam from "./Pages/Taking";
import Teacher from "./Pages/Teacher";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/student" element={<Student />}>
            <Route index element={<ExamList />} />
            <Route path="/student/list" element={<ExamList />} />
            <Route path="/student/results" element={<Result />} />
          </Route>
          <Route
            path="/student/taking"
            element={<TakingExam examID="#Exam1" />}
          />
          <Route path="/teacher" element={<Teacher />} />

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
