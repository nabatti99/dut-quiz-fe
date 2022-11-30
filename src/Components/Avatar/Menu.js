import "./Avatar.css";
import MenuItems from "./MenuItems";
import listOutline from "./menuicon/list-outline.png";
import result from "./menuicon/checkmark-done-outline.png";
import calendar from "./menuicon/calendar-outline.png";

const menuItems = [
  {
    icon: listOutline,
    title: "Danh sách bài thi",
    link: "/student/list",
  },
  {
    icon: result,
    title: "Kết quả",
    link: "/student/results",
  },
  {
    icon: calendar,
    title: "Lịch trình thi",
    link: "/student/calendar",
  },
];

function Menu() {
  return (
    <div className="MenuProfile">
      <MenuItems
        icon={menuItems[0].icon}
        title={menuItems[0].title}
        link={menuItems[0].link}
      />
      <MenuItems
        icon={menuItems[1].icon}
        title={menuItems[1].title}
        link={menuItems[1].link}
      />
      <MenuItems
        icon={menuItems[2].icon}
        title={menuItems[2].title}
        link={menuItems[2].link}
      />
    </div>
  );
}

export default Menu;
