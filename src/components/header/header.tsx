import { useLocation } from "react-router";
import Avatar from "../avatar/avatar";

const Header = () => {
  const localtion = useLocation();

  const findPageName = (localtion: string): string => {
    if (localtion === "/home") {
      return " Эффективность деятельности Системы ПМСП";
    } else if (localtion === "/health") {
      return "Состояние здоровья и благополучия населения";
    } else if (localtion === "/service") {
      return "Охват услугами";
    } else if (localtion === "/staff") {
      return "Кадровые ресурсы Министерства здравоохранения";
    } else if (localtion === "/import") {
      return "Импорт данных";
    } else {
      return "Сотрудники";
    }
  };

  return (
    <header className="bg-white p-4">
      <div className="container mx-2 flex justify-between items-center">
        <h1 className="text-lg font-bold">
          {findPageName(localtion.pathname)}
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <Avatar />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
