import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Exams from "../Components/Exam/Exams";
import APIs from "../Test/APIs";
import "./ExamList.css";

function ExamList(props) {
  let [exams, setExams] = useState([]);
  let [recommend, setRecommend] = useState([]);

  const getAllExam = () => {
    let allExams = [];
    const responseOptions = {
      method: "GET",
      headers: APIs.getAllExams.headers,
    };
    fetch(APIs.getAllExams.link, responseOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === "true") {
          allExams = [];
          data.exams.forEach((exam) => {
            let date = new Date(exam.startDate);
            let examDate =
              date.getHours() +
              "h" +
              date.getMinutes() +
              " ngày " +
              date.getDate() +
              "/" +
              date.getMonth() +
              "/" +
              date.getFullYear();
            let examElement = {
              id: exam._id,
              subject: "Ngôn Ngữ Lập trình",
              title: exam.title,
              time: exam.duration,
              date: examDate,
              length: exam.numberOfQuestion,
            };

            allExams.push(examElement);
          });

          setExams((prev) => allExams);
          if (allExams.length >= 2)
            setRecommend((prev) => [allExams[0], allExams[1]]);
          else if (allExams.length === 1) setRecommend(allExams);
          else setRecommend([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllExam();
  }, []);

  return (
    <div className="examList">
      <div className="contain">
        <div className="recommend">
          <h2>Bài thi đề xuất:</h2>
          <div className="recommendExams">
            {recommend.map(function (exam) {
              return <Exams key={exam.id} exam={exam} />;
            })}
          </div>
        </div>
        <div className="all">
          <h2>Tất cả bài thi:</h2>
          <div className="allExams">
            {exams.map(function (exam) {
              return <Exams key={exam.id} exam={exam} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamList;
