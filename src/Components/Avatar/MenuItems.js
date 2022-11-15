import "./Avatar.css";

function MenuItems(props) {
  return (
    <div className="menuItems">
      <div
        className="icon"
        style={{ backgroundImage: `url(${props.icon})` }}
      ></div>
      <div className="title">{props.title}</div>
    </div>
  );
}
export default MenuItems;
