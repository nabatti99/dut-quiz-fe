import "./QuizNode.css";

function QuizNode(props) {
  const src = props.src;
  return (
    <div className="quizNode" id={"node" + src.id}>
      <div className="indexNode">
        <p>{props.index}</p>
      </div>
      <div className="status"></div>
    </div>
  );
}

export default QuizNode;
