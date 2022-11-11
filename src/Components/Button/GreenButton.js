import "./Button.css";
import { Link } from "react-router-dom";

function GreenButton(props) {
  return (
    <div>
      <Link to={props.link}>
        <button className="greenButton">{props.value}</button>
      </Link>
    </div>
  );
}
export default GreenButton;
