import "./Taking.css";
import Header from "../Components/Header";
import Question from "../Components/TakingExam/Question";
import BadButton from "../Components/Button/BadButton";
import WellButton from "../Components/Button/WellButton";
import WarningButton from "../Components/Button/WarningButton";
import QuizNode from "../Components/TakingExam/QuizNode";
import Timer from "../Components/TakingExam/Timer";
import { useEffect, useState, useRef } from "react";
import allExams from "../Test/test";
import loadingIcon from "../Components/Avatar/menuicon/loadingIcon.gif";

function TakingExam(props) {
  const warningMessage = [
    "- Chọn đáp án đúng nhất ở các câu hồi trắc nghiệm. Các câu yêu cầu chọn nhiều đáp án, có ô chọn hình vuông thì phải chọn hết tất cả các đáp án đúng mới được tính điểm.",
    "-  Nút nộp bài chỉ hiện khi đã làm hết các câu hỏi.",
    "- Tuyệt đối không được click chuột ra khỏi khu vực làm bài trong quá trình làm bài thi. Nếu vi phạm quá 3 lần, bài thi sẽ dừng lại ngay lập tức.",
    "- Nếu trong quá trình làm bài xảy ra sự cố về mạng. Hãy đăng nhập lại, hệ thống vẫn sự lưu trữ quá trình làm bài.",
    "- Có thể click vào ô câu hỏi bên trên để lướt nhanh đến câu hỏi muốn làm",
  ];
  const exam = allExams.find((exam) => exam.id === props.examID);
  const set = exam.set;
  let countNode = 0;
  let countQuest = 0;
  let countFault = useRef(0);

  const [submit, setSubmit] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [timeOutSubmit, setTimeOutSubmit] = useState(false);

  function preventBlurWin() {
    // countFault.current++;
    // setShowWarning(true);
  }

  useEffect(() => {
    window.addEventListener("blur", preventBlurWin);

    return () => {
      window.removeEventListener("blur", preventBlurWin);
    };
  }, []);

  useEffect(() => {
    const timerIDNode = setInterval(() => {
      let countDone = 0;
      set.questions.forEach((question) => {
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

    const logo = document.getElementById("logo");
    const preventLogoClick = (e) => {
      e.preventDefault();
    };
    logo.addEventListener("click", (e) => {
      preventLogoClick(e);
    });
    return () => {
      clearInterval(timerIDNode);
      logo.removeEventListener("click", (e) => {
        preventLogoClick(e);
      });
    };
  }, []);

  function TimeOUt(minutesLeft) {
    if (minutesLeft === 0)
      setTimeout(() => {
        setTimeOutSubmit(true);
        SubmitHandler();
      }, 1000);
  }
  function SubmitHandler() {
    //mở trang loading
    setConfirm(true);
    setShowSubmit(false);
    setShowWarning(false);
    setSubmit(false);

    document.getElementById("logo").removeEventListener("click", () => {});

    //Chấm bài

    //Gửi bài lên server

    //xoa duong link lam bai

    //unmounted

    if (timeOutSubmit) {
      //tra ve trang student
    } else {
      //tra ve trang xem diem
    }
  }

  return (
    <div className="takingExam">
      <div className="contain">
        <div className="title">
          <span>{exam.title}</span>
        </div>
        <div className="nottitle">
          <div className="testManaging">
            <div className="questionNodes">
              {set.questions.map((question, index) => {
                return (
                  <QuizNode
                    src={question}
                    index={++countNode}
                    key={question.id + "node"}
                    onClick={() => {
                      document
                        .getElementById(
                          set.questions[index === 0 ? index : index - 1].id
                        )
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
              <p id="faultCount">{"Số lần vi phạm: " + countFault.current}</p>
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
                {!confirm ? (
                  <Timer time={exam.time} timeout={TimeOUt} />
                ) : (
                  "00:00:00"
                )}
              </div>
              <div id="subject">
                <p>{"Học phần: " + exam.subject}</p>
              </div>
              <div id="time">
                <p>{"Thời gian: " + exam.time + " phút"}</p>
              </div>
            </div>
            <div className="testField">
              {set.questions.map((question) => {
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
                <BadButton
                  value="Nộp bài"
                  onClick={() => setSubmit((prev) => !prev)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <Header type="student" />
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
            <WarningButton
              value="Chờ chút kiểm tra lại tí!"
              onClick={() => setSubmit((prev) => !prev)}
            />
            <WellButton value="Nộp luôn!" onClick={SubmitHandler} />
          </div>
        </div>
      </div>

      <div
        id="warn"
        style={
          !showWarning
            ? { visibility: "hidden", transition: 0.25 }
            : { visibility: "visible", transition: 0.25 }
        }
      >
        <div className="confirmMessage">
          <p>
            {`Bạn đã vi phạm ${countFault.current} lần, nếu vi phạm thêm ${
              3 - countFault.current
            }
              lần nữa bài thi của bạn sẽ được kết thúc ngay lập tức`}
          </p>
          <WarningButton
            value="Đã hiểu"
            onClick={() => setShowWarning(false)}
          />
        </div>
      </div>

      <div
        id="loading"
        style={
          !confirm
            ? { visibility: "hidden", transition: 0.25 }
            : { visibility: "visible", transition: 0.25 }
        }
      >
        <div
          id="loadingIcon"
          style={{ backgroundImage: `url(${loadingIcon})` }}
        ></div>
      </div>
    </div>
  );
}

export default TakingExam;
