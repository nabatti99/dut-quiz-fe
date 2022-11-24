import Header from "../Components/Header";
import "./Taking.css";
import Question from "../Components/TakingExam/Question";
import RedButton from "../Components/Button/RedButton";
import QuizNode from "../Components/TakingExam/QuizNode";

function TakingExam(props) {
  const warningMessage = [
    "- Chọn đáp án đúng nhất ở các câu hồi trắc nghiệm. Các câu yêu cầu chọn nhiều đáp án thì phải chọn hết tất cả các đáp án đúng mới được tính điểm.",
    "-  Nút nộp bài chỉ hiện khi đã làm hết các câu hỏi.",
    "- Tuyệt đối không được click chuột ra khỏi khu vực làm bài trong quá trình làm bài thi. Nếu vi phạm quá 3 lần, bài thi sẽ dừng lại ngay lập tức.",
    "- Nếu trong quá trình làm bài xảy ra sự cố về mạng. Hãy đăng nhập lại, hệ thống vẫn sự lưu trữ quá trình làm bài.",
  ];
  const set = props.set;
  let countNode = 0;
  let countQuest = 0;
  return (
    <div className="takingExam">
      <div className="contain">
        <div className="title">
          <span>{props.title}</span>
        </div>
        <div className="nottitle">
          <div className="testManaging">
            <div className="questionNodes">
              {set.map((question) => {
                return <QuizNode src={question} index={++countNode} />;
              })}
            </div>
            <div className="warning">
              <p id="faultCount">Số lần vi phạm: </p>
              <div id="warningMessage">
                {warningMessage.map((mess) => {
                  return <p>{mess}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="testContain">
            <div className="infor">
              <div id="timer">
                <p>44:59</p>
              </div>
              <div id="subject">
                <p>{"Học phần: " + props.subject}</p>
              </div>
              <div id="time">
                <p>{"Thời gian: " + props.time + "phút"}</p>
              </div>
            </div>
            <div className="testField">
              {set.map((question) => {
                return <Question src={question} />;
              })}
              <RedButton value="Nộp bài" />
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div id="left"></div>
      <div id="right"></div>
      <div id="top"></div>
      <div id="bottom"></div>
    </div>
  );
}

export default TakingExam;
