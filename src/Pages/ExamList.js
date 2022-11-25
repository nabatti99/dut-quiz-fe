import Exams from "../Components/Exam/Exams";
import Header from "../Components/Header";
import "./ExamList.css";

function ExamList() {
  const allExams = [
    {
      subject: "Ngôn ngữ lập trình",
      length: "40 câu",
      time: "90 phút",
      title: "Bài thi giữa kỳ môn ngôn ngữ lập trình",
      date: "9h00 ngày 22/10/2022",
    },
    {
      subject: "Ngôn ngữ lập trình",
      length: "60 câu",
      time: "120 phút",
      title: "Bài thi cuối kỳ môn ngôn ngữ lập trình",
      date: "9h00 ngày 22/12/2022",
    },
    {
      subject: "Ngôn ngữ lập trình",
      length: "60 câu",
      time: "120 phút",
      title: "Bài thi cuối kỳ môn ngôn ngữ lập trình",
      date: "9h00 ngày 22/12/2022",
    },
    {
      subject: "Ngôn ngữ lập trình",
      length: "60 câu",
      time: "120 phút",
      title: "Bài thi cuối kỳ môn ngôn ngữ lập trình",
      date: "9h00 ngày 22/12/2022",
    },
    {
      subject: "Ngôn ngữ lập trình",
      length: "60 câu",
      time: "120 phút",
      title: "Bài thi cuối kỳ môn ngôn ngữ lập trình",
      date: "9h00 ngày 22/12/2022",
    },
  ];
  const recommendExams = [allExams[0], allExams[1]];
  return (
    <div className="examList">
      <div className="contain">
        <div className="recommend">
          <h2>Bài thi đề xuất:</h2>
          <div className="recommendExams">
            {recommendExams.map(function (exam) {
              return (
                <Exams
                  subject={exam.subject}
                  length={exam.length}
                  time={exam.time}
                  title={exam.title}
                  date={exam.date}
                />
              );
            })}
          </div>
        </div>
        <div className="all">
          <h2>Tất cả bài thi:</h2>
          <div className="allExams">
            {allExams.map(function (exam) {
              return (
                <Exams
                  subject={exam.subject}
                  length={exam.length}
                  time={exam.time}
                  title={exam.title}
                  date={exam.date}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
}

export default ExamList;
