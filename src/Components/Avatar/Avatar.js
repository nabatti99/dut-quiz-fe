import "./Avatar.css";
import Menu from "./Menu";

function avatarClick() {
  let profile = document.querySelector(".profile");
  profile.classList.toggle("active");
}

function Avatar() {
  return (
    <div className="profile">
      <div className="num1">
        <div className="infor">
          <span id="name">Lê Trí Tâm</span>
          <span id="studentid">102180042</span>
        </div>
        <div className="avatar" onClick={avatarClick}>
          <div className="image"></div>
        </div>
      </div>

      <div className="Menu" id="profileMenu">
        <Menu />
      </div>
    </div>
  );
}

export default Avatar;
