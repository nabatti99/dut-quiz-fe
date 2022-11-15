import "./Avatar.css";
import MenuItems from "./MenuItems";
import listOutline from "./menuicon/list-outline.png";
import result from "./menuicon/checkmark-done-outline.png";
import calendar from "./menuicon/calendar-outline.png";

const menuItems = [
  {
    icon: listOutline,
    title: "Danh sách liên kết",
  },
  {
    icon: result,
    title: "Kết quả",
  },
  {
    icon: calendar,
    title: "Lịch trình thi",
  },
];

function Menu() {
  return (
    <div className="MenuProfile">
      <MenuItems icon={menuItems[0].icon} title={menuItems[0].title} />
      <MenuItems icon={menuItems[1].icon} title={menuItems[1].title} />
      <MenuItems icon={menuItems[2].icon} title={menuItems[2].title} />
    </div>
  );
}

export default Menu;
