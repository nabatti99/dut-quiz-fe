import { useState, useEffect, useRef } from "react";
import "./Avatar.css";
import Menu from "./Menu";

function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();
  useEffect(() => {
    const closeMenu = (e) => {
      if (e.path[1] !== btnRef.current) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div
      className={"profile" + (isOpen ? " active" : "")}
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
    >
      <div className="num1">
        <div className="infor">
          <span id="name">Lê Trí Tâm</span>
          <span id="studentid">102180042</span>
        </div>
        <div className="avatar" ref={btnRef}>
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
