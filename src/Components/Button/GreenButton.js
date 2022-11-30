import "./Button.css";
import { Link } from "react-router-dom";

function GreenButton(props) {
  return (
    <div>
      <Link to={props.link}>
        <button className="greenButton" onClick={props.onClick}>
          {props.value}
        </button>
      </Link>
    </div>
  );
}
export default GreenButton;
