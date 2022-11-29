import Header from "../Components/Header";
import "./Taking.css";
import Question from "../Components/TakingExam/Question";
import RedButton from "../Components/Button/RedButton";
import GreenButton from "../Components/Button/GreenButton";
import QuizNode from "../Components/TakingExam/QuizNode";
import Timer from "../Components/TakingExam/Timer";
import { useEffect, useState } from "react";

function TakingExam(props) {
  const warningMessage = [
    "- Chọn đáp án đúng nhất ở các câu hồi trắc nghiệm. Các câu yêu cầu chọn nhiều đáp án, có ô chọn hình vuông thì phải chọn hết tất cả các đáp án đúng mới được tính điểm.",
    "-  Nút nộp bài chỉ hiện khi đã làm hết các câu hỏi.",
    "- Tuyệt đối không được click chuột ra khỏi khu vực làm bài trong quá trình làm bài thi. Nếu vi phạm quá 3 lần, bài thi sẽ dừng lại ngay lập tức.",
    "- Nếu trong quá trình làm bài xảy ra sự cố về mạng. Hãy đăng nhập lại, hệ thống vẫn sự lưu trữ quá trình làm bài.",
    "- Có thể click vào ô câu hỏi bên trên để lướt nhanh đến câu hỏi muốn làm",
  ];
  const set = props.set;
  let countNode = 0;
  let countQuest = 0;
  let countFault = 0;
  const [submit, setSubmit] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  useEffect(() => {
    setInterval(() => {
      let countDone = 0;
      set.map((question) => {
        if (
          document
            .getElementById("node" + question.id)
            .classList.contains("done")
        )
          countDone++;
      });
      if (countDone === countNode) setShowSubmit(true);
      else setShowSubmit(false);
    }, 1000);
  }, []);
  return (
    <div className="takingExam">
      <div className="contain">
        <div className="title">
          <span>{props.title}</span>
        </div>
        <div className="nottitle">
          <div className="testManaging">
            <div className="questionNodes">
              {set.map((question, index) => {
                return (
                  <QuizNode
                    src={question}
                    index={++countNode}
                    key={question.id + "node"}
                    onClick={() => {
                      document
                        .getElementById(set[index === 0 ? index : index - 1].id)
                        .scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                          inline: "nearest",
                        });
                    }}
                  />
                );
              })}
            </div>
            <div className="warning">
              <p id="faultCount">{"Số lần vi phạm: " + countFault}</p>
              <div id="warningMessage">
                {warningMessage.map((mess) => {
                  return <p key={warningMessage.indexOf(mess)}>{mess}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="testContain">
            <div className="infor">
              <div id="timer">
                <Timer time={props.time} />
              </div>
              <div id="subject">
                <p>{"Học phần: " + props.subject}</p>
              </div>
              <div id="time">
                <p>{"Thời gian: " + props.time + " phút"}</p>
              </div>
            </div>
            <div className="testField">
              {set.map((question) => {
                return (
                  <Question
                    src={question}
                    index={++countQuest}
                    key={question.id}
                  />
                );
              })}
            </div>
            {showSubmit && (
              <div className="submitBtn">
                <RedButton
                  value="Nộp bài"
                  onClick={() => setSubmit((prev) => !prev)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Header />
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
      <div
        id="confirm"
        style={
          !submit
            ? { visibility: "hidden", transition: 0.25 }
            : { visibility: "visible", transition: 0.25 }
        }
      >
        <div className="confirmMessage">
          <p>
            Bạn có xác nhận nộp bài không? Hãy kiểm tra lại một lần nữa nếu cảm
            thấy chưa chắc chắn! Nếu xác nhận sẽ không thể thay đổi kết quả nữa!
          </p>
          <div className="confirmBtn">
            <RedButton
              value="Chờ chút kiểm tra lại tí!"
              onClick={() => setSubmit((prev) => !prev)}
            />
            <GreenButton value="Nộp luôn!" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakingExam;
