import "./Avatar.css";

function Avatar() {
  return (
    <div className="profile">
      <div className="infor">
        <span id="name">Lê Trí Tâm</span>
        <span id="studentid">102180042</span>
      </div>
      <div className="avatar">
        <div className="image"></div>
        <div className="navigation"></div>
      </div>
    </div>
  );
}

export default Avatar;
