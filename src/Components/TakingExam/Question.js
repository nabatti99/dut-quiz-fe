import "./Question.css";

function Question(props) {
  let src = props.src;

  function checkDone() {
    let theQuestion = document.getElementById(src.id);
    console.log(theQuestion);
    let _check = src.answers.some((ans, _index) =>
      document
        .getElementById(src.id + "." + _index)
        .classList.contains("selected")
    );
    theQuestion.classList.toggle("done", _check === true);
  }

  switch (src.type) {
    case "multiple":
      return (
        <div className="multipleChoiceQuiz">
          <div className="theQuestion" id={src.id}>
            <p>{"Câu " + src.id + ": " + src.question}</p>
          </div>
          <div className="theAnswers">
            {src.answers.map((ans, index) => {
              function multipleChoice() {
                const answer = document.getElementById(src.id + "." + index);
                answer.classList.toggle("selected");
                checkDone();
              }
              return (
                <div className="answer" id={src.id + "." + index}>
                  <div className="tickButton" onClick={multipleChoice}></div>
                  <div className="ansContent">{ans.content}</div>
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
            <p>{"Câu " + src.id + ": " + src.question}</p>
          </div>
          <div className="theAnswers">
            {src.answers.map((ans, index) => {
              function singleChoice() {
                src.answers.forEach((_ans, _index) => {
                  let theAnswers = document.getElementById(
                    src.id + "." + _index
                  );
                  if (
                    theAnswers.classList.contains("selected") &&
                    _index !== index
                  )
                    theAnswers.classList.toggle("selected");
                });
                let selectedAnswer = document.getElementById(
                  src.id + "." + index
                );
                selectedAnswer.classList.toggle("selected");
                checkDone();
              }
              return (
                <div className="answer" id={src.id + "." + index}>
                  <div className="tickButton" onClick={singleChoice}></div>
                  <div className="ansContent">{ans.content}</div>
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
