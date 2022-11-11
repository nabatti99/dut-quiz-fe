import "./Exam.css";

function Exams(props) {
  return (
    <div className="exambox">
      <div className="up">
        <div className="left">
          <span id="subject">{props.subject}</span>
        </div>
        <div className="right">
          <span id="length">{props.length}</span>
          <span id="time">{props.time}</span>
        </div>
      </div>
      <div className="title">
        <span id="title">{props.title}</span>
      </div>
      <div className="down">
        <span id="date">{props.date}</span>
      </div>
    </div>
  );
}

export default Exams;
