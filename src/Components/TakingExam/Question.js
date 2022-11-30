import "./Question.css";
import { useState } from "react";

function Question(props) {
  let src = props.src;

  let [multipleCheck, setMultipleCheck] = useState([]);
  const checkDoneMultiple = (array) => {
    let theQuestion = document.getElementById(src.id);
    let _check = array.length !== 0;
    theQuestion.classList.toggle("done", _check);
    let node = document.getElementById("node" + src.id);
    node.classList.toggle("done", theQuestion.classList.contains("done"));
  };

  function MultipleCheckHandler(id) {
    let _check = multipleCheck.includes(id);
    if (_check) {
      let after = multipleCheck.filter((item) => item !== id);
      setMultipleCheck(after);
      checkDoneMultiple(after);
    } else {
      let after = [...multipleCheck, id];
      setMultipleCheck(after);
      checkDoneMultiple(after);
    }
  }

  let [singleCheck, setSingleCheck] = useState("");
  const checkDoneSingle = (id) => {
    let theQuestion = document.getElementById(src.id);
    let _check = id !== "";
    theQuestion.classList.toggle("done", _check);
    let node = document.getElementById("node" + src.id);
    node.classList.toggle("done", theQuestion.classList.contains("done"));
  };

  function SingleCheckHandler(id) {
    setSingleCheck(id);
    checkDoneSingle();
  }

  switch (src.type) {
    case "multiple":
      return (
        <div className="multipleChoiceQuiz">
          <div className="theQuestion" id={src.id}>
            <p>{"Câu " + props.index + ": " + src.title}</p>
          </div>
          <div className="theAnswers">
            {src.answers.map((ans, index) => {
              let _id = src.id + "." + index;
              return (
                <div className="answer" id={_id} key={index}>
                  <input
                    type="checkbox"
                    onChange={() => MultipleCheckHandler(_id)}
                  />{" "}
                  {ans.content};
                </div>
              );
            })}
          </div>
        </div>
      );
    case "single":
      return (
        <div className="singleChoiceQuiz">
          <div className="theQuestion" id={src.id}>
            <p>{"Câu " + props.index + ": " + src.title}</p>
          </div>
          <div className="theAnswers">
            {src.answers.map((ans, index) => {
              let _id = src.id + "." + index;
              return (
                <div className="answer" key={index} id={_id}>
                  <input
                    type="radio"
                    checked={singleCheck === src.id + "." + index}
                    onChange={() => SingleCheckHandler(_id)}
                  />
                  {ans.content}
                </div>
              );
            })}
          </div>
        </div>
      );
    default:
      return <div></div>;
  }
}

export default Question;
