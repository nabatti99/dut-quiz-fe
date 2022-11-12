import "./Avatar.css";
import MenuItems from "./MenuItems";

const menuItems = [
  {
    icon: "/public/menu icon/list-outline.svg",
    title: "Danh sách liên kết",
  },
  {
    icon: "/public/menu icon/checkmark-done-outline.svg",
    title: "Kết quả",
  },
  {
    icon: "/public/menu icon/checkmark-done-outline/calendar-outline.svg",
    title: "Lịch trình thi",
  },
];

function Menu() {
  return (
    <div className="Menu Profile">
      <MenuItems icon={menuItems[0].icon} title={menuItems[0].title} />
      <MenuItems icon={menuItems[1].icon} title={menuItems[1].title} />
      <MenuItems icon={menuItems[2].icon} title={menuItems[2].title} />
    </div>
  );
}

export default Menu;
