import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Exams from "../Components/Exam/Exams";
import allExams from "../Test/test";
import "./ExamList.css";

function ExamList(props) {
  let idRefs = useRef([]);
  useEffect(() => {
    idRefs.current.forEach((examid) => {
      props.callback(examid);
    });
  });

  const recommendExams = [allExams[0], allExams[1]];
  return (
    <div className="examList">
      <div className="contain">
        <div className="recommend">
          <h2>Bài thi đề xuất:</h2>
          <div className="recommendExams">
            {recommendExams.map(function (exam) {
              return (
                <Link
                  key={"recomend-exam" + exam.id}
                  to={"/student/taking/" + exam.id}
                >
                  <Exams exam={exam} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="all">
          <h2>Tất cả bài thi:</h2>
          <div className="allExams">
            {allExams.map(function (exam) {
              idRefs.current.push(exam.id);
              return (
                <Link key={"exam" + exam.id} to={"/student/taking/" + exam.id}>
                  <Exams exam={exam} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamList;
