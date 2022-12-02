import "./Button.css";
import { Link } from "react-router-dom";

function RedButton(props) {
  return (
    <div>
      <Link to={props.link}>
        <button type={props.type} className="redButton" onClick={props.onClick}>
          {props.value}
        </button>
      </Link>
    </div>
  );
}
export default RedButton;
